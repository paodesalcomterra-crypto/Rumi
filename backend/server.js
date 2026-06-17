const axios = require("axios");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const YOUTUBE_KEY =
  "AIzaSyA-pCNWsoSxHjRNnAWpPbBeb-BYhO1JaHw";

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const salas = {};

const usuariosPorSala = {};

const perfisPorSala = {};

app.get("/youtube/search", async (req, res) => {
  try {
    const termo = req.query.q;

    const resposta = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: termo,
          maxResults: 20,
          type: "video",
          key: YOUTUBE_KEY,
        },
      }
    );

    res.json(resposta.data.items);
  } catch (erro) {
    console.log(erro);

    res.status(500).json({
      erro: "Erro ao buscar vídeos",
    });
  }
});

io.on("connection", (socket) => {
  console.log("Usuário conectado");

  socket.on(
    "entrarSala",
    ({ sala, usuario }) => {
      socket.join(sala);

      socket.codigoSala = sala;

      socket.usuarioInfo = usuario;

      if (!salas[sala]) {
        salas[sala] = {
          videoId: "",
          pausado: true,
          tempo: 0,
        };
      }

      if (!usuariosPorSala[sala]) {
        usuariosPorSala[sala] = 0;
      }

      if (!perfisPorSala[sala]) {
        perfisPorSala[sala] = [];
      }

      usuariosPorSala[sala]++;

      perfisPorSala[sala].push({
        id: socket.id,
        nome: usuario.nome,
        foto: usuario.foto,
      });

      io.to(sala).emit(
        "atualizarQuantidade",
        usuariosPorSala[sala]
      );

      io.to(sala).emit(
        "atualizarPerfis",
        perfisPorSala[sala]
      );

      socket.emit(
        "estadoAtual",
        salas[sala]
      );
    }
  );

  socket.on("entrarCanalVoz", () => {
    if (!socket.codigoSala) return;

    socket.to(socket.codigoSala).emit(
      "usuarioEntrouVoz",
      {
        socketId: socket.id,
      }
    );
  });

  socket.on("sairCanalVoz", () => {
    if (!socket.codigoSala) return;

    socket.to(socket.codigoSala).emit(
      "usuarioSaiuVoz",
      {
        socketId: socket.id,
      }
    );
  });

  socket.on(
    "trocarVideo",
    ({ sala, videoId }) => {
      salas[sala].videoId = videoId;

      io.to(sala).emit(
        "videoTrocado",
        videoId
      );
    }
  );

  socket.on(
    "playVideo",
    ({ sala, tempo }) => {
      salas[sala].tempo = tempo;
      salas[sala].pausado = false;

      io.to(sala).emit(
        "playVideo",
        {
          tempo,
        }
      );
    }
  );
  
  socket.on(
    "pauseVideo",
    ({ sala, tempo }) => {
      salas[sala].tempo = tempo;
      salas[sala].pausado = true;

      io.to(sala).emit(
        "pauseVideo",
        {
          tempo,
        }
      );
    }
  );

  socket.on(
    "seekVideo",
    ({ sala, tempo }) => {
      salas[sala].tempo = tempo;

      socket.to(sala).emit(
        "seekVideo",
        {
          tempo,
        }
      );
    }
  );

  socket.on(
    "enviarMensagem",
    ({ sala, mensagem }) => {
      io.to(sala).emit(
        "novaMensagem",
        mensagem
      );
    }
  );

  socket.on("disconnect", () => {
    const sala = socket.codigoSala;

    if (
      sala &&
      usuariosPorSala[sala]
    ) {
      usuariosPorSala[sala]--;

      if (perfisPorSala[sala]) {
        perfisPorSala[sala] =
          perfisPorSala[sala].filter(
            (user) =>
              user.id !== socket.id
          );

        io.to(sala).emit(
          "atualizarPerfis",
          perfisPorSala[sala]
        );
      }

      io.to(sala).emit(
        "atualizarQuantidade",
        usuariosPorSala[sala]
      );
    }

    console.log("Usuário saiu");
  });
});

server.listen(3001, () => {
  console.log(
    "Servidor rodando na porta 3001"
  );
});