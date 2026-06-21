const axios = require("axios");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { google } = require("googleapis");
const path = require("path");

const YOUTUBE_KEY =
  "AIzaSyA-pCNWsoSxHjRNnAWpPbBeb-BYhO1JaHw";

const app = express();

app.get("/", (req, res) => {
  res.send("RUMI BACKEND ONLINE");
});

app.use(cors());

const serviceAccount = JSON.parse(
  process.env.GOOGLE_SERVICE_ACCOUNT_JSON
);

const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: [
    "https://www.googleapis.com/auth/drive.readonly",
  ],
});

const drive = google.drive({
  version: "v3",
  auth,
});

app.get(
  "/drive/videos",
  async (req, res) => {
    try {
      const pastaId = req.query.folderId;

      const resposta =
        await drive.files.list({
          q: `'${pastaId}' in parents and trashed=false`,
          fields:
            "files(id,name,mimeType)",
        });

      res.json(
        resposta.data.files
      );
    } catch (erro) {
      console.log("ERRO DRIVE:");
      console.log(erro);

      if (erro.response) {
        console.log(
          erro.response.data
        );
      }

      res.status(500).json({
        erro:
          "Erro ao buscar vídeos",
      });
    }
  }
);

const server = http.createServer(app);

console.log("SOCKET.IO INICIALIZANDO...");

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

console.log("SOCKET.IO CRIADO");

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

app.get("/drive/videos", async (req, res) => {
  try {
    const pastaId = req.query.pastaId;

    const resposta = await drive.files.list({
      q: `'${pastaId}' in parents and trashed=false`,
      fields: "files(id,name,mimeType)",
    });

    res.json(resposta.data.files);
  } catch (erro) {
    console.log(erro);

    res.status(500).json({
      erro: "Erro ao buscar vídeos do Drive",
    });
  }
});

app.get(
  "/drive/stream/:id",
  async (req, res) => {
    try {
      const fileId = req.params.id;

      const meta =
        await drive.files.get({
          fileId,
          fields: "size,mimeType",
        });

      const fileSize =
        Number(meta.data.size);

      const mimeType =
        meta.data.mimeType;

      const range =
        req.headers.range;

      if (!range) {
        res.writeHead(200, {
          "Content-Length":
            fileSize,
          "Content-Type":
            mimeType,
          "Accept-Ranges":
            "bytes",
        });

        const resposta =
          await drive.files.get(
            {
              fileId,
              alt: "media",
            },
            {
              responseType:
                "stream",
            }
          );

        resposta.data.pipe(res);

        return;
      }

      const parts =
        range.replace(
          /bytes=/,
          ""
        ).split("-");

      const start =
        parseInt(parts[0], 10);

      const end =
        parts[1]
          ? parseInt(
              parts[1],
              10
            )
          : fileSize - 1;

      const chunkSize =
        end -
        start +
        1;

      res.writeHead(206, {
        "Content-Range":
          `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges":
          "bytes",
        "Content-Length":
          chunkSize,
        "Content-Type":
          mimeType,
      });

      const resposta =
        await drive.files.get(
          {
            fileId,
            alt: "media",
          },
          {
            responseType:
              "stream",
            headers: {
              Range:
                `bytes=${start}-${end}`,
            },
          }
        );

      resposta.data.pipe(res);
    } catch (erro) {
      console.log(
        "ERRO STREAM DRIVE:"
      );

      console.log(erro);

      res.status(500).end();
    }
  }
);

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
  ({ sala, videoId, tipo }) => {
    salas[sala].videoId = videoId;
    salas[sala].tipo = tipo;

    io.to(sala).emit(
      "videoTrocado",
      {
        videoId,
        tipo,
      }
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

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(
    `Servidor rodando na porta ${PORT}`
  );
});