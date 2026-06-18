import { io } from "socket.io-client";
import { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";
import microfone from "./assets/microfone.png";
import microfoneativo from "./assets/microfoneativo.png";
import helokat from "./assets/helokat.jfif";
import fechar from "./assets/fechar.png";
import lupa from "./assets/lupa.png";
import helloKittyYoutube from "./assets/hello kitty youtube.jpg";
import cinamoroll from "./assets/cinamoroll.jpg";
import Rumi from "./assets/Rumi.png";
import pessoas from "./assets/pessoas.png";
import manete from "./assets/manete.png";
const socket = io("https://rumi-backend-6j0l.onrender.com");

socket.on("connect", () => {
  console.log("SOCKET CONECTADO:", socket.id);
});

socket.on("connect_error", (erro) => {
  console.log("ERRO SOCKET:", erro);
});

function Room({
  salaAtual,
  usuario,
}) {
  const [microfoneLigado, setMicrofoneLigado] = useState(false);

 const [mensagens, setMensagens] = useState([]);

  const [novaMensagem, setNovaMensagem] = useState("");

  const [quantidadeUsuarios, setQuantidadeUsuarios] = useState(1);

  const [buscaAberta, setBuscaAberta] = useState(false);

  const [painelUsuariosAberto,
    setPainelUsuariosAberto] = useState(false);

  const [inicioToque, setInicioToque] =
    useState(null);

  const [movimentoToque, setMovimentoToque] =
    useState(0);

  const [youtubeAberto, setYoutubeAberto] = useState(false);

  const playerRef = useRef(null);

  const ignorarEvento = useRef(false);

  const ultimoTempo = useRef(0);

  const localStreamRef = useRef(null);

const peersRef = useRef({});

  const [videoAtual, setVideoAtual] = useState("");

const [pesquisaYoutube, setPesquisaYoutube] = useState("");
const [videosYoutube, setVideosYoutube] = useState([]);
const [carregandoYoutube, setCarregandoYoutube] = useState(false);
const [usuariosSala, setUsuariosSala] = useState([]);

const meuId =
  usuario?.displayName ||
  "Usuario_" + Math.floor(Math.random() * 10000);

useEffect(() => {
  socket.emit("entrarSala", {
    sala: salaAtual,
    usuario: {
      nome: usuario?.displayName || meuId,
      foto: usuario?.photoURL || "",
    },
  });

  socket.on("novaMensagem", (mensagem) => {
    setMensagens((anterior) => [
      ...anterior,
      mensagem,
    ]);
  });

  console.log("Entrou na sala:", salaAtual);

  socket.on("atualizarQuantidade", (quantidade) => {
    setQuantidadeUsuarios(quantidade);
  });

  socket.on("atualizarPerfis", (usuarios) => {
    setUsuariosSala(usuarios);
  });

  socket.on("usuarioEntrouVoz", ({ socketId }) => {
    console.log(
      "Entrou no canal de voz:",
      socketId
    );
  });

  socket.on("usuarioSaiuVoz", ({ socketId }) => {
    console.log(
      "Saiu do canal de voz:",
      socketId
    );
  });

  socket.on("videoTrocado", (videoId) => {
    setVideoAtual(videoId);
  });

  socket.on("estadoAtual", (estado) => {
    if (estado.videoId) {
      setVideoAtual(estado.videoId);

      setTimeout(() => {
        if (!playerRef.current) return;

        ignorarEvento.current = true;

        playerRef.current.seekTo(
          estado.tempo || 0,
          true
        );

        if (estado.pausado) {
          playerRef.current.pauseVideo();
        } else {
          playerRef.current.playVideo();
        }

        setTimeout(() => {
          ignorarEvento.current = false;
        }, 500);
      }, 1500);
    }
  });

  socket.on("playVideo", ({ tempo }) => {
    if (!playerRef.current) return;

    ignorarEvento.current = true;

    playerRef.current.seekTo(tempo, true);
    playerRef.current.playVideo();

    setTimeout(() => {
      ignorarEvento.current = false;
    }, 500);
  });

  socket.on("pauseVideo", ({ tempo }) => {
    if (!playerRef.current) return;

    ignorarEvento.current = true;

    playerRef.current.seekTo(tempo, true);
    playerRef.current.pauseVideo();

    setTimeout(() => {
      ignorarEvento.current = false;
    }, 500);
  });

  socket.on("seekVideo", ({ tempo }) => {
    if (!playerRef.current) return;

    ignorarEvento.current = true;

    playerRef.current.seekTo(tempo, true);

    setTimeout(() => {
      ignorarEvento.current = false;
    }, 500);
  });

  return () => {
    socket.off("novaMensagem");
    socket.off("atualizarQuantidade");
    socket.off("atualizarPerfis");
    socket.off("usuarioEntrouVoz");
    socket.off("usuarioSaiuVoz");
    socket.off("videoTrocado");
    socket.off("estadoAtual");
    socket.off("playVideo");
    socket.off("pauseVideo");
    socket.off("seekVideo");
  };
}, [salaAtual]);
useEffect(() => {
  const intervalo = setInterval(() => {
    if (!playerRef.current) return;

    const tempoAtual =
      playerRef.current.getCurrentTime();

    const diferenca =
      Math.abs(
        tempoAtual - ultimoTempo.current
      );

    if (
      diferenca > 3 &&
      !ignorarEvento.current
    ) {
      socket.emit("seekVideo", {
        sala: salaAtual,
        tempo: tempoAtual,
      });
    }

    ultimoTempo.current = tempoAtual;
  }, 1000);

  return () => clearInterval(intervalo);
}, [salaAtual]);

async function ativarMicrofone() {
  if (microfoneLigado) {
    if (localStreamRef.current) {
      localStreamRef.current
        .getTracks()
        .forEach((track) => track.stop());

      localStreamRef.current = null;
    }

    socket.emit("sairCanalVoz");

    setMicrofoneLigado(false);

    return;
  }

  try {
    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

    localStreamRef.current = stream;

    socket.emit("entrarCanalVoz");

    setMicrofoneLigado(true);
  } catch (erro) {
    console.log("ERRO MICROFONE:");
    console.log(erro);

    alert(
      "Erro: " +
      erro.name +
      " - " +
      erro.message
    );
  }
}

function enviarMensagem() {
  if (!novaMensagem.trim()) return;

  socket.emit("enviarMensagem", {
    sala: salaAtual,
    mensagem: {
      nome: meuId,
      foto: usuario?.photoURL || "",
      texto: novaMensagem,
    },
  });

  setNovaMensagem("");
}

async function pesquisarYoutube() {
  if (!pesquisaYoutube.trim()) return;

  try {
    setCarregandoYoutube(true);

  const resposta = await fetch(
  `https://rumi-backend-6j0l.onrender.com/youtube/search?q=${encodeURIComponent(
    pesquisaYoutube
  )}`
);

    const dados = await resposta.json();

console.log("DADOS YOUTUBE:", dados);

setVideosYoutube(
  Array.isArray(dados)
    ? dados
    : dados.items || []
);

console.log(dados);

setVideosYoutube(
  Array.isArray(dados)
    ? dados
    : dados.items || []
);
  } catch (erro) {
    console.log(erro);
  } finally {
    setCarregandoYoutube(false);
  }
}

return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* VIDEO */}

      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
        }}
      >
        <img
  src={helokat}
  alt=""
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }}
/>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,.65), rgba(0,0,0,.15))",
          }}
        />
      </div>

      {videoAtual && (
  <div
    style={{
      position: "absolute",
      top: "75px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      maxWidth: "900px",
      zIndex: 5,
    }}
  >
    <div
      style={{
        aspectRatio: "16 / 9",
        borderTopLeftRadius: "3px",
        borderTopRightRadius: "3px",
        overflow: "hidden",
        boxShadow: "0 0 25px rgba(0,0,0,.5)",
      }}
    >
     <YouTube
  videoId={videoAtual}
  opts={{
    width: "100%",
    height: "100%",
    playerVars: {
  autoplay: 1,

  modestbranding: 1,
  rel: 0,
  iv_load_policy: 3,
  fs: 1,
  playsinline: 1,
  disablekb: 1,

  controls: 1,
},
  }}
  onReady={(event) => {
    playerRef.current = event.target;

    window.playerTeste = event.target;

    console.log("PLAYER PRONTO");
  }}
  onPlay={() => {
  if (ignorarEvento.current) return;

  socket.emit("playVideo", {
    sala: salaAtual,
    tempo: playerRef.current.getCurrentTime(),
  });
}}
  onPause={() => {
  if (ignorarEvento.current) return;

  socket.emit("pauseVideo", {
    sala: salaAtual,
    tempo: playerRef.current.getCurrentTime(),
  });
}}
  style={{
    width: "100%",
    height: "100%",
  }}
/>

</div>

<div
  style={{
    height: "33px",
        background: "rgba(0,0,0,.45)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",

        borderBottomLeftRadius: "2px",
        borderBottomRightRadius: "2px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        color: "white",
        fontWeight: "bold",
        fontSize: "14px",

        boxShadow:
          "0 10px 25px rgba(0,0,0,.35)",
      }}
    >
      Sala: {salaAtual}
    </div>
  </div>
)}

     {/* TOPO */}

<div
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
    height: "80px",
    padding: "0 15px",
    display: "flex",
    alignItems: "center",

    background:
      "linear-gradient(to bottom, rgba(0,0,0,.75), rgba(0,0,0,.15))",
  }}
>
  <img
    src={fechar}
    alt=""
    style={{
      width: "46px",
      height: "46px",
      objectFit: "contain",
      cursor: "pointer",
    }}
  />

  <img
    src={manete}
    alt=""
    style={{
      width: "46px",
      height: "46px",
      objectFit: "contain",
      cursor: "pointer",
      marginLeft: "28px",
    }}
  />

<div
  style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <img
    src={Rumi}
    alt=""
    style={{
      height: "122px",
      objectFit: "contain",
    }}
  />

</div>

  <img
  src={lupa}
  alt=""
  onClick={() => setBuscaAberta(true)}
  style={{
    width: "40px",
    height: "40px",
    objectFit: "contain",
    cursor: "pointer",
    marginRight: "20px",
  }}
/>

  <div
  style={{
    position: "relative",
    width: "40px",
    height: "40px",
  }}
>
  <img
  src={pessoas}
  alt=""
  onClick={() =>
    setPainelUsuariosAberto(
      !painelUsuariosAberto
    )
  }
  style={{
    width: "42px",
    height: "42px",
    objectFit: "contain",
    cursor: "pointer",
  }}
/>

<div
  style={{
    position: "absolute",
    top: "2px",
    right: "9px",

    color: "white",

    fontSize: "9px",
    fontWeight: "bold",

    textShadow: "0 0 8px rgba(0,0,0,.8)",
  }}
>
  {quantidadeUsuarios}
</div>
</div>
</div>

<div
  onTouchStart={(e) => {
    setInicioToque(
      e.touches[0].clientX
    );
  }}
  onTouchMove={(e) => {
    if (inicioToque === null) return;

    const distancia =
      e.touches[0].clientX -
      inicioToque;

    if (distancia > 0) {
      setMovimentoToque(distancia);
    }
  }}
  onTouchEnd={() => {
    if (movimentoToque > 100) {
      setPainelUsuariosAberto(false);
    }

    setInicioToque(null);
    setMovimentoToque(0);
  }}
  style={{
    position: "absolute",

    top: "0 px",
    bottom: 0,

    right:
      painelUsuariosAberto
        ? "0"
        : "-380px",

    width: "289px",
    maxWidth: "85vw",

    height: "90%",

    zIndex: 500,

    transition:
      movimentoToque === 0
        ? "0.35s ease"
        : "none",

    transform: `translateX(${movimentoToque}px)`,

    background:
      "rgba(0, 0, 0, 0.45)",

    backdropFilter: "blur(18px)",
    WebkitBackdropFilter:
      "blur(18px)",

    borderLeft:
      "1px solid rgba(255,255,255,.08)",

    boxShadow:
  "-10px 0 30px rgba(0,0,0,.5)",

overflowY: "auto",
}}
>
  {usuariosSala.map((usuario, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 20px",
        marginTop: index === 0 ? "13px" : "0",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <img
  src={
    usuario.foto ||
    "https://ui-avatars.com/api/?name=" +
      encodeURIComponent(
        usuario.nome
      )
  }
  alt=""
  style={{
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    objectFit: "cover",

    border: "2px solid white",
    boxSizing: "border-box",

    boxShadow:
      "0 0 10px rgba(0,0,0,.4)",
  }}
/>

        <div
          style={{
            position: "absolute",
            right: "0",
            bottom: "0",

            width: "12px",
            height: "12px",

            borderRadius: "50%",

            background: "#ff91de",

            border:
              "2px solid black",
          }}
        />
      </div>

      <div
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",

           marginTop: "-7px",
        }}
      >
        {usuario.nome}
      </div>
    </div>
  ))}
</div>

{buscaAberta && (
  <div
    style={{
      position: "absolute",
      inset: 0,
      zIndex: 999,

      backgroundColor: "#111",

      display: "flex",
      flexDirection: "column",
    }}
  >
{youtubeAberto ? (
  <>
    <div
      style={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "0 15px",
      }}
    >
      <img
        src={fechar}
        alt=""
        onClick={() => setYoutubeAberto(false)}
        style={{
          width: "40px",
          height: "40px",
          objectFit: "contain",
          cursor: "pointer",
        }}
      />
      <input
        placeholder="Pesquisar no YouTube..."
        value={pesquisaYoutube}
        onChange={(e) =>
          setPesquisaYoutube(e.target.value)
        }
        onKeyDown={(e) => {
          console.log("TECLA:", e.key);

          if (e.key === "Enter") {
            console.log("ENTROU NA PESQUISA");
            pesquisarYoutube();
          }
        }}
        style={{
          flex: 1,
          height: "45px",
          border: "none",
          outline: "none",
          borderRadius: "999px",
          padding: "0 15px",
          backgroundColor: "#222",
          color: "white",
        }}
      />
    </div>

    <div
  style={{
    padding: "15px",
    overflowY: "auto",
  }}
>
  {carregandoYoutube && (
    <div
      style={{
        color: "white",
      }}
    >
      Pesquisando...
    </div>
  )}

  {videosYoutube.map((video) => (
  <div
    key={video.id.videoId}
    onClick={() => {
  socket.emit("trocarVideo", {
    sala: salaAtual,
    videoId: video.id.videoId,
  });

  setYoutubeAberto(false);
  setBuscaAberta(false);
}}
    style={{
        display: "flex",
        gap: "12px",
        marginBottom: "15px",
        cursor: "pointer",
      }}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt=""
        style={{
          width: "160px",
          borderRadius: "10px",
        }}
      />

      <div>
        <div
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          {video.snippet.title}
        </div>

        <div
          style={{
            color: "#999",
            marginTop: "5px",
          }}
        >
          {video.snippet.channelTitle}
        </div>
      </div>
    </div>
  ))}
</div>
  </>
) : (
  <>
    <div
      style={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "0 15px",
      }}
    >
      <img
        src={fechar}
        alt=""
        onClick={() => setBuscaAberta(false)}
        style={{
          width: "40px",
          height: "40px",
          objectFit: "contain",
          cursor: "pointer",
        }}
      />

      <input
        placeholder="Pesquisar..."
        style={{
          flex: 1,
          height: "45px",
          border: "none",
          outline: "none",
          borderRadius: "999px",
          padding: "0 15px",
          backgroundColor: "#222",
          color: "white",
        }}
      />
    </div>

    <div
  style={{
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  }}
>
  <button
  onClick={() => setYoutubeAberto(true)}
  style={{
    width: "100%",
    height: "60px",
    border: "none",
    borderRadius: "15px",
    background: "#e38796",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",

    display: "flex",
    alignItems: "center",
    gap: "12px",
    paddingLeft: "15px",
  }}
>
  <img
    src={helloKittyYoutube}
    alt=""
    style={{
      width: "35px",
      height: "35px",
      objectFit: "contain",
    }}
  />

  <span
  style={{
    textShadow:
      "0 0 4px rgba(255,255,255,0.13)",
  }}
>
  YouTube
</span>
</button>

<button
  onClick={() => {
    alert("Google Drive em desenvolvimento");
  }}
  style={{
    width: "100%",
    height: "60px",
    border: "none",
    borderRadius: "15px",
    background: "#cfe4ff",
    color: "#ffffff",
    fontSize: "18px",
    cursor: "pointer",

    display: "flex",
    alignItems: "center",
    gap: "12px",
    paddingLeft: "15px",
  }}
>
  <img
    src={cinamoroll}
    alt=""
    style={{
      width: "50px",
      height: "50px",
      objectFit: "contain",
    }}
  />

  <span
    style={{
      textShadow:
        "0 0 4px rgba(255,255,255,0.21)",
    }}
  >
    Google Drive
  </span>
</button>
</div>
  </>
)}

  </div>
)}

      {/* CHAT FLUTUANTE */}

      <div
  style={{
    position: "absolute",
    top: "333px",
    left: 0,
    right: 0,
    bottom: "95px",
    overflowY: "auto",
    padding: "5px",
    zIndex: 10,

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  }}
>
        {mensagens.map((msg, index) => {
  const souEu = msg.nome === meuId;

  return (
    <div
      key={index}
      style={{
        display: "flex",
        justifyContent: souEu ? "flex-end" : "flex-start",
        marginBottom: "18px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: souEu ? "row-reverse" : "row",
          alignItems: "flex-start",
          gap: "10px",
          maxWidth: "85%",
        }}
      >
        <img
  src={
    msg.foto ||
    "https://ui-avatars.com/api/?name=" +
      encodeURIComponent(msg.nome)
  }
  alt=""
  style={{
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
    flexShrink: 0,

    border: "2px solid white",
    boxSizing: "border-box",

    boxShadow: "0 0 10px rgba(0,0,0,.4)",
  }}
/>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: souEu ? "flex-end" : "flex-start",
          }}
        >
          {!souEu && (
            <div
              style={{
                color: "#fff",
                fontWeight: "bold",
                marginBottom: "4px",
                textShadow: "0 0 8px rgba(0,0,0,.8)",
              }}
            >
              {msg.nome}
            </div>
          )}

          <div
            style={{
              background: "rgba(0,0,0,.45)",
              backdropFilter: "blur(8px)",
              color: "#fff",
              padding: "10px 14px",
              borderRadius: "16px",
              maxWidth: "100%",
              wordBreak: "break-word",
              textAlign: souEu ? "right" : "left",
            }}
          >
            {msg.texto}
          </div>
        </div>
      </div>
    </div>
  );
})}
      </div>

      {/* BARRA INFERIOR */}

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          padding: "12px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background:
            "linear-gradient(to top, rgba(0,0,0,.85), rgba(0,0,0,.3))",
        }}
      >
        <button
  onClick={ativarMicrofone}
  style={{
    width: "60px",
    height: "60px",
    border: "none",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
  }}
>
  <img
    src={
      microfoneLigado
        ? microfoneativo
        : microfone
    }
    alt="Microfone"
    style={{
      width: "60px",
      height: "60px",
      borderRadius: "20%",

      filter: microfoneLigado
        ? `
          drop-shadow(0 0 3px #ff91de)
          drop-shadow(0 0 6px #f588bf)
          drop-shadow(0 0 11px #fc89ae)
          drop-shadow(0 0 14px #42121c)
        `
        : "none",

      transition: "0.3s ease",
    }}
  />
</button>

        <input
          value={novaMensagem}
          onChange={(e) => setNovaMensagem(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              enviarMensagem();
            }
          }}
          placeholder="Bate-papo..."
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            borderRadius: "999px",
            padding: "14px 18px",
            background: "rgba(255,255,255,.12)",
            color: "#fff",
            backdropFilter: "blur(10px)",
          }}
        />

        <button
          onClick={enviarMensagem}
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            border: "none",
            background: "#ff8edb",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}

export default Room;