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
import play from "./assets/play.png";
import pause from "./assets/pause.png";
import avançar10segundos from "./assets/avançar10segundos.png";
import voltar10segundos from "./assets/voltar10segundos.png";
import telacheia from "./assets/telacheia.png";
import GamesScreen from "./components/GamesScreen/GamesScreen";
import figurinha from "./assets/figurinha.png";

import miranha_fig from "./assets/Imagens_Figurinhas/miranha_fig.png";
import hellokitty_fig from "./assets/Imagens_Figurinhas/hellokitty_fig.png";
import velho_fig from "./assets/Imagens_Figurinhas/velho_fig.png";
import davi_fig from "./assets/Imagens_Figurinhas/davi_fig.png";
import cabeloroxo_fig from "./assets/Imagens_Figurinhas/cabeloroxo_fig.png";
import sonic_fig from "./assets/Imagens_Figurinhas/sonic_fig.png";
import cachorro_triste_fig from "./assets/Imagens_Figurinhas/cachorro_triste_fig.png";
import cachorro_fig from "./assets/Imagens_Figurinhas/cachorro_fig.png";
import chorando_fig from "./assets/Imagens_Figurinhas/chorando_fig.png";
import figurinha1 from "./assets/Imagens_Figurinhas/figurinha1.png";
import figurinha2 from "./assets/Imagens_Figurinhas/figurinha2.png";
import figurinha4 from "./assets/Imagens_Figurinhas/figurinha4.png";
import figurinha5 from "./assets/Imagens_Figurinhas/figurinha5.png";
import figurinha6 from "./assets/Imagens_Figurinhas/figurinha6.png";
import figurinha7 from "./assets/Imagens_Figurinhas/figurinha7.png";
import figurinha8 from "./assets/Imagens_Figurinhas/figurinha8.png";
import figurinha9 from "./assets/Imagens_Figurinhas/figurinha9.png";
import figurinha10 from "./assets/Imagens_Figurinhas/figurinha10.png";
import figurinha11 from "./assets/Imagens_Figurinhas/figurinha11.png";
import figurinha12 from "./assets/Imagens_Figurinhas/figurinha12.png";
import figurinha13 from "./assets/Imagens_Figurinhas/figurinha13.png";
import figurinha14 from "./assets/Imagens_Figurinhas/figurinha14.png";
import figurinha15 from "./assets/Imagens_Figurinhas/figurinha15.png";
import figurinha16 from "./assets/Imagens_Figurinhas/figurinha16.png";
import figurinha17 from "./assets/Imagens_Figurinhas/figurinha17.png";
import figurinha18 from "./assets/Imagens_Figurinhas/figurinha18.png";
import figurinha19 from "./assets/Imagens_Figurinhas/figurinha19.png";
import figurinha20 from "./assets/Imagens_Figurinhas/figurinha20.png";
import figurinha21 from "./assets/Imagens_Figurinhas/figurinha21.png";
import figurinha22 from "./assets/Imagens_Figurinhas/figurinha22.png";
import figurinha23 from "./assets/Imagens_Figurinhas/figurinha23.png";
import figurinha24 from "./assets/Imagens_Figurinhas/figurinha24.png";
import figurinha25 from "./assets/Imagens_Figurinhas/figurinha25.png";
import figurinha26 from "./assets/Imagens_Figurinhas/figurinha26.png";
import figurinha27 from "./assets/Imagens_Figurinhas/figurinha27.png";
import figurinha28 from "./assets/Imagens_Figurinhas/figurinha28.png";
import figurinha29 from "./assets/Imagens_Figurinhas/figurinha29.png";
import figurinha30 from "./assets/Imagens_Figurinhas/figurinha30.png";
import figurinha31 from "./assets/Imagens_Figurinhas/figurinha31.png";
import figurinha32 from "./assets/Imagens_Figurinhas/figurinha32.png";
import figurinha33 from "./assets/Imagens_Figurinhas/figurinha33.png";
import figurinha34 from "./assets/Imagens_Figurinhas/figurinha34.png";
import figurinha35 from "./assets/Imagens_Figurinhas/figurinha35.png";
import figurinha36 from "./assets/Imagens_Figurinhas/figurinha36.png";
import figurinha37 from "./assets/Imagens_Figurinhas/figurinha37.png";
import figurinha40 from "./assets/Imagens_Figurinhas/figurinha40.png";
import figurinha50 from "./assets/Imagens_Figurinhas/figurinha50.png";
import menino_gif from "./assets/Imagens_Figurinhas/menino_gif.gif";
import coracao_fig from "./assets/Imagens_Figurinhas/coracao_fig.gif";
import fig61 from "./assets/Imagens_Figurinhas/fig61.png";
import fig62 from "./assets/Imagens_Figurinhas/fig62.png";
import fig63 from "./assets/Imagens_Figurinhas/fig63.png";
import fig64 from "./assets/Imagens_Figurinhas/fig64.png";
import fig65 from "./assets/Imagens_Figurinhas/fig65.png";
import fig66 from "./assets/Imagens_Figurinhas/fig66.png";
import fig67 from "./assets/Imagens_Figurinhas/fig67.png";
import fig68 from "./assets/Imagens_Figurinhas/fig68.png";
import fig69 from "./assets/Imagens_Figurinhas/fig69.png";
import fig70 from "./assets/Imagens_Figurinhas/fig70.png";
import fig71 from "./assets/Imagens_Figurinhas/fig71.png";
import fig72 from "./assets/Imagens_Figurinhas/fig72.png";
import fig73 from "./assets/Imagens_Figurinhas/fig73.png";
import fig74 from "./assets/Imagens_Figurinhas/fig74.png";
import fig75 from "./assets/Imagens_Figurinhas/fig75.png";
import fig76 from "./assets/Imagens_Figurinhas/fig76.png";
import fig77 from "./assets/Imagens_Figurinhas/fig77.png";
import fig78 from "./assets/Imagens_Figurinhas/fig78.png";
import fig79 from "./assets/Imagens_Figurinhas/fig79.png";
import fig80 from "./assets/Imagens_Figurinhas/fig80.png";
import fig81 from "./assets/Imagens_Figurinhas/fig81.png";
import fig85 from "./assets/Imagens_Figurinhas/fig85.gif";
import fig86 from "./assets/Imagens_Figurinhas/fig86.gif";

const socket = io("https://rumi-production-3089.up.railway.app");

socket.on("connect", () => {
  console.log("SOCKET CONECTADO:", socket.id);
});

socket.on("connect_error", (erro) => {
  console.log("ERRO SOCKET:", erro);
});

function Room({
  salaAtual,
  usuario,
  avatarEscolhido,
  nickEscolhido,
}) {

  console.log(
  "ROOM MONTADO",
  salaAtual,
  usuario?.displayName
);

  console.log("ROOM RENDERIZOU");
console.log("SOCKET ID ATUAL:", socket.id);

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

    const [overlayIcon, setOverlayIcon] =
  useState(null);

const [videoPausado, setVideoPausado] =
  useState(false);

  const [youtubeAberto, setYoutubeAberto] = useState(false);

  const playerRef = useRef(null);

  const ignorarEvento = useRef(false);

  const videoDriveRef = useRef(null);

  const chatRef = useRef(null);

  const inputMensagemRef = useRef(null);

  const ultimoTempo = useRef(0);

  const localStreamRef = useRef(null);

  const peerConnectionsRef = useRef({});

const peersRef = useRef({});

const [videoAtual, setVideoAtual] = useState("");

const [tipoVideo, setTipoVideo] = useState("youtube");

const [videoDriveUrl, setVideoDriveUrl] = useState("");

const [arquivosDrive, setArquivosDrive] =
  useState([]);

const [carregandoDrive, setCarregandoDrive] =
  useState(false);

const [driveAberto, setDriveAberto] =
  useState(false);

const [googleToken, setGoogleToken] = useState("");

const [tempoVideo, setTempoVideo] = useState(0);
const [duracaoVideo, setDuracaoVideo] = useState(0);

const [mostrarBarra, setMostrarBarra] = useState(false);

const timerBarraRef = useRef(null);

const CLIENT_ID =
  "517167715767-t49svli06l2fg3gnrh3d3q29akfou2cc.apps.googleusercontent.com";

const [pesquisaYoutube, setPesquisaYoutube] = useState("");
const [videosYoutube, setVideosYoutube] = useState([]);
const [carregandoYoutube, setCarregandoYoutube] = useState(false);
const [usuariosSala, setUsuariosSala] = useState([]);

const [activeScreen, setActiveScreen] = useState("room");

const [painelFigurinhasAberto, setPainelFigurinhasAberto] =
  useState(false);

const figurinhas = [
  miranha_fig,
  hellokitty_fig,
  velho_fig,
  davi_fig,
  cabeloroxo_fig,
  sonic_fig,
  cachorro_triste_fig,
  cachorro_fig,
  chorando_fig,

  figurinha1,
  figurinha2,
  figurinha4,
  figurinha5,
  figurinha6,
  figurinha7,
  figurinha8,
  figurinha9,
  figurinha10,
  figurinha11,
  figurinha12,
  figurinha13,
  figurinha14,
  figurinha15,
  figurinha16,
  figurinha17,
  figurinha18,
  figurinha19,
  figurinha20,
  figurinha21,
  figurinha22,
  figurinha23,
  figurinha24,
  figurinha25,
  figurinha26,
  figurinha27,
  figurinha28,
  figurinha29,
  figurinha30,
  figurinha31,
  figurinha32,
  figurinha33,
  figurinha34,
  figurinha35,
  figurinha36,
  figurinha37,
  figurinha40,
  figurinha50,
  menino_gif,
  coracao_fig,
  fig61,
  fig62,
  fig63,
  fig64,
  fig65,
  fig66,
  fig67,
  fig68,
  fig69,
  fig70,
  fig71,
  fig72,
  fig73,
  fig74,
  fig75,
  fig76,
  fig77,
  fig78,
  fig79,
  fig80,
  fig81,
  fig85,
  fig86,
];

const meuId =
  nickEscolhido ||
  usuario?.displayName ||
  "Usuario_" + Math.floor(Math.random() * 10000);

useEffect(() => {
  socket.emit("entrarSala", {
    sala: salaAtual,
    usuario: {
  nome: nickEscolhido,
  foto: usuario?.photoURL || "",
},
  });

 socket.on("novaMensagem", (mensagem) => {
  console.log(mensagem.figurinha);

  console.log("MENSAGEM RECEBIDA:", mensagem);

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

socket.on(
  "usuarioEntrouVoz",
  async ({ socketId }) => {

    if (!localStreamRef.current)
      return;

    if (socket.id > socketId)
      return;

    const peer =
      new RTCPeerConnection({
        iceServers: [
          {
            urls:
              "stun:stun.l.google.com:19302",
          },
        ],
      });

    peerConnectionsRef.current[
      socketId
    ] = peer;

    localStreamRef.current
      .getTracks()
      .forEach((track) => {
        peer.addTrack(
          track,
          localStreamRef.current
        );
      });

    peer.onicecandidate = (
      event
    ) => {

      if (event.candidate) {

        socket.emit(
          "iceCandidate",
          {
            targetId: socketId,
            candidate:
              event.candidate,
          }
        );

      }

    };

    peer.ontrack = (
      event
    ) => {

      const audio = document.createElement("audio");

audio.autoplay = true;
audio.playsInline = true;
audio.srcObject = event.streams[0];

document.body.appendChild(audio);

audio.play().catch((err) => {
  console.log("ERRO AUDIO PLAY:", err);
});

    };

    const offer =
      await peer.createOffer();

    await peer.setLocalDescription(
      offer
    );

    socket.emit("offer", {
      targetId: socketId,
      offer,
    });

  }
);

socket.on(
  "usuarioSaiuVoz",
  ({ socketId }) => {

    if (
      peerConnectionsRef.current[
        socketId
      ]
    ) {

      peerConnectionsRef.current[
        socketId
      ].close();

      delete peerConnectionsRef.current[
        socketId
      ];

    }

  }
);

socket.on(
  "offer",
  async ({
    senderId,
    offer,
  }) => {

    if (!localStreamRef.current)
      return;

    const peer =
      new RTCPeerConnection({
        iceServers: [
          {
            urls:
              "stun:stun.l.google.com:19302",
          },
        ],
      });

    peerConnectionsRef.current[
      senderId
    ] = peer;

    localStreamRef.current
      .getTracks()
      .forEach((track) => {
        peer.addTrack(
          track,
          localStreamRef.current
        );
      });

    peer.onicecandidate = (
      event
    ) => {

      if (event.candidate) {

        socket.emit(
          "iceCandidate",
          {
            targetId:
              senderId,
            candidate:
              event.candidate,
          }
        );

      }

    };

    peer.ontrack = (
      event
    ) => {

      const audio =
        new Audio();

      audio.srcObject =
        event.streams[0];

      audio.play();

    };

    await peer.setRemoteDescription(
      new RTCSessionDescription(
        offer
      )
    );

    const answer =
      await peer.createAnswer();

    await peer.setLocalDescription(
      answer
    );

    socket.emit(
      "answer",
      {
        targetId:
          senderId,
        answer,
      }
    );

  }
);

socket.on(
  "answer",
  async ({
    senderId,
    answer,
  }) => {

    const peer =
      peerConnectionsRef.current[
        senderId
      ];

    if (!peer) return;

    await peer.setRemoteDescription(
      new RTCSessionDescription(
        answer
      )
    );

  }
);

socket.on(
  "iceCandidate",
  async ({
    senderId,
    candidate,
  }) => {

    const peer =
      peerConnectionsRef.current[
        senderId
      ];

    if (!peer) return;

    await peer.addIceCandidate(
      new RTCIceCandidate(
        candidate
      )
    );

  }
);

  socket.on("videoTrocado", ({ videoId, tipo }) => {
  if (tipo === "youtube") {
    setTipoVideo("youtube");
    setVideoAtual(videoId);
  }

  if (tipo === "drive") {
    setTipoVideo("drive");

    setVideoDriveUrl(
      `https://rumi-production-3089.up.railway.app/drive/stream/${videoId}`
    );
  }
});

  socket.on("estadoAtual", (estado) => {
  if (!estado.videoId) return;

  if (estado.tipo === "youtube") {
    setTipoVideo("youtube");
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

  if (estado.tipo === "drive") {
    setTipoVideo("drive");

    setVideoDriveUrl(
      `https://rumi-production-3089.up.railway.app/drive/stream/${estado.videoId}`
    );
  }
});

  socket.on("playVideo", ({ tempo }) => {

  console.log(
    "PLAY RECEBIDO",
    tempo,
    tipoVideo
  );

  if (tipoVideo === "youtube") {

    if (!playerRef.current) return;

    ignorarEvento.current = true;

    playerRef.current.seekTo(tempo, true);
    playerRef.current.playVideo();

    setTimeout(() => {
      ignorarEvento.current = false;
    }, 500);

  } else {

    if (!videoDriveRef.current) return;

    ignorarEvento.current = true;

    videoDriveRef.current.currentTime = tempo;
    videoDriveRef.current.play();

    setTimeout(() => {
      ignorarEvento.current = false;
    }, 500);

  }
});
socket.on("pauseVideo", ({ tempo }) => {

  console.log(
    "PAUSE RECEBIDO",
    tempo,
    tipoVideo
  );

  if (tipoVideo === "youtube") {

    if (!playerRef.current) return;

    ignorarEvento.current = true;

    playerRef.current.seekTo(tempo, true);
    playerRef.current.pauseVideo();

    setTimeout(() => {
      ignorarEvento.current = false;
    }, 500);

  } else {

    if (!videoDriveRef.current) return;

    ignorarEvento.current = true;

    videoDriveRef.current.currentTime = tempo;
    videoDriveRef.current.pause();

    setTimeout(() => {
      ignorarEvento.current = false;
    }, 500);

  }
});

socket.on("seekVideo", ({ tempo }) => {

  if (tipoVideo === "youtube") {

    if (!playerRef.current) return;

    ignorarEvento.current = true;

    playerRef.current.seekTo(tempo, true);

    setTimeout(() => {
      ignorarEvento.current = false;
    }, 500);

  } else {

    if (!videoDriveRef.current) return;

    videoDriveRef.current.currentTime = tempo;

  }
});

socket.on(
  "overlayVideo",
  ({ overlay }) => {

    setOverlayIcon(overlay);

  }
);

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
  socket.off("overlayVideo");
};
}, [salaAtual, tipoVideo]);

useEffect(() => {
  if (!chatRef.current) return;

  chatRef.current.scrollTop =
    chatRef.current.scrollHeight;
}, [mensagens]);

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

function loginGoogleDrive() {
  const tokenClient =
    google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,

      scope:
        "https://www.googleapis.com/auth/drive.readonly",

      callback: async (response) => {
        setGoogleToken(
          response.access_token
        );

        try {
          setCarregandoDrive(true);

          const resposta = await fetch(
            "https://www.googleapis.com/drive/v3/files?q=mimeType contains 'video/'&fields=files(id,name,mimeType,webViewLink,webContentLink)",
            {
              headers: {
                Authorization: `Bearer ${response.access_token}`,
              },
            }
          );

          const dados =
  await resposta.json();

console.log(
  "ARQUIVOS DRIVE:",
  dados.files
);

setArquivosDrive(
  dados.files || []
);

          setDriveAberto(true);

        } catch (erro) {
          console.log(erro);
        } finally {
          setCarregandoDrive(false);
        }
      },
    });

  tokenClient.requestAccessToken();
}

async function ativarMicrofone() {

  console.log("CLICOU MICROFONE");

  if (microfoneLigado) {

    Object.values(
      peerConnectionsRef.current
    ).forEach((peer) => {
      peer.close();
    });

    peerConnectionsRef.current = {};

    if (localStreamRef.current) {

      localStreamRef.current
        .getTracks()
        .forEach((track) =>
          track.stop()
        );

      localStreamRef.current =
        null;

    }

    socket.emit(
      "sairCanalVoz"
    );

    setMicrofoneLigado(false);

    return;

  }

  try {

    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      console.log("MICROFONE LIBERADO");

    localStreamRef.current =
      stream;

    console.log("EMITINDO entrarCanalVoz");

socket.emit("entrarCanalVoz");

    setMicrofoneLigado(true);

  } catch (erro) {

    console.log(
      "ERRO MICROFONE:"
    );

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
      figurinha: null,
    },
  });

  setNovaMensagem("");
}

function enviarFigurinha(fig) {

  socket.emit("enviarMensagem", {
    sala: salaAtual,
    mensagem: {
      nome: meuId,
      foto: usuario?.photoURL || "",
      texto: "",
      figurinha: fig + "?v=" + Date.now(),
    },
  });

  setPainelFigurinhasAberto(false);
}

function mostrarControlesVideo() {
  setMostrarBarra(true);

  if (timerBarraRef.current) {
    clearTimeout(timerBarraRef.current);
  }

  timerBarraRef.current = setTimeout(() => {
    setMostrarBarra(false);
  }, 1000);
}

async function pesquisarYoutube() {
  if (!pesquisaYoutube.trim()) return;

  try {
    setCarregandoYoutube(true);

    const resposta = await fetch(
      `https://rumi-production-3089.up.railway.app/youtube/search?q=${encodeURIComponent(
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

  {activeScreen === "games" && (
  <GamesScreen
    onClose={() => setActiveScreen("room")}
    avatarEscolhido={avatarEscolhido}
    nickEscolhido={nickEscolhido}
    usuario={usuario}
    usuariosSala={usuariosSala}
  />
)}

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

{(videoAtual || videoDriveUrl) && (
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
      {tipoVideo === "youtube" && (
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
)}

{tipoVideo === "drive" && (
<>
  <video
    ref={videoDriveRef}
    src={videoDriveUrl}
    autoPlay
    playsInline
    preload="auto"
    controls={false}

    onTimeUpdate={() => {
      if (!videoDriveRef.current) return;
      setTempoVideo(videoDriveRef.current.currentTime);
    }}

    onLoadedMetadata={() => {
      if (!videoDriveRef.current) return;
      setDuracaoVideo(videoDriveRef.current.duration);
    }}

    onPlay={() => {

      if (ignorarEvento.current) return;

      setVideoPausado(false);

      socket.emit("playVideo", {
        sala: salaAtual,
        tempo: videoDriveRef.current.currentTime,
      });

    }}

    onPause={() => {

      if (ignorarEvento.current) return;

      setVideoPausado(true);

      socket.emit("pauseVideo", {
        sala: salaAtual,
        tempo: videoDriveRef.current.currentTime,
      });

    }}

    style={{
      width: "100%",
      height: "115%",
      objectFit: "cover",

      position: "relative",
      top: "-38px",

      background: "#000",
    }}
  />

  <div
    onClick={() => {
      mostrarControlesVideo();
      if (!videoDriveRef.current)
        return;

      if (videoDriveRef.current.paused) {

        socket.emit("overlayVideo", {
          sala: salaAtual,
          overlay: "pause",
        });

        setOverlayIcon("pause");

        videoDriveRef.current.play();

        setTimeout(() => {
          if (
            !videoDriveRef.current?.paused
          ) {

            socket.emit("overlayVideo", {
              sala: salaAtual,
              overlay: null,
            });

            setOverlayIcon(null);
          }
        }, 700);

      } else {

        if (overlayIcon !== "pause") {

          socket.emit("overlayVideo", {
            sala: salaAtual,
            overlay: "pause",
          });

          setOverlayIcon("pause");

        } else {

          videoDriveRef.current.pause();

socket.emit("overlayVideo", {
  sala: salaAtual,
  overlay: "play",
});

setOverlayIcon("play");

        }

      }
    }}
    style={{
      position: "absolute",
      inset: 0,

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      zIndex: 8000,

      cursor: "pointer",
    }}
  >
  <img
  src={
    overlayIcon === "play"
      ? play
      : pause
  }
  alt=""
  style={{
    width:
      overlayIcon === "pause"
        ? "260px"
        : "46px",

    height:
      overlayIcon === "pause"
        ? "260px"
        : "46px",

    opacity:
      overlayIcon ? 1 : 0,

    transform: overlayIcon
      ? "translateY(-22px) scale(1)"
      : "translateY(-22px) scale(.65)",

    transition:
      "opacity 0.1s cubic-bezier(.22,1,.36,1), transform 1.4s cubic-bezier(.22,1,.36,1)",

    pointerEvents: "none",

    userSelect: "none",

    filter:
      "drop-shadow(0 0 18px rgba(0,0,0,.45))",
  }}
/>
</div>

{mostrarBarra && (
  <div
    style={{
      position: "absolute",
      left: "26px",
      right: "26px",
      bottom: "66px",

      zIndex: 9000,

      opacity: 1,
      transition: ".25s",

      pointerEvents: "auto",
    }}
  >
    <input
      type="range"
      min={0}
      max={duracaoVideo || 0}
      value={tempoVideo}
      onChange={(e) => {
        const tempo = Number(e.target.value);

        setTempoVideo(tempo);

        if (videoDriveRef.current) {
          videoDriveRef.current.currentTime = tempo;

          socket.emit("seekVideo", {
            sala: salaAtual,
            tempo,
          });
        }
      }}
      style={{
        width: "100%",
        cursor: "pointer",
      }}
    />
  </div>
)}

<div
 style={{
  position: "absolute",
  bottom: "18px",
  left: "50%",
  transform: "translateX(-50%)",

  display: "flex",
  alignItems: "center",
  gap: "116px",

  background: "transparent",

  padding: "0px",

  zIndex: 9999,
}}
>
  <img
  src={voltar10segundos}
  alt=""
  onClick={(e) => {
  e.stopPropagation();

  const video =
    videoDriveRef.current;

  if (!video) return;

  video.currentTime -= 10;

  socket.emit("seekVideo", {
    sala: salaAtual,
    tempo: video.currentTime,
  });
}}
  style={{
  width: "28px",
  height: "28px",

  position: "relative",
  top: "-110px",

  transform: "scale(2.0)",

  opacity:
  videoPausado || overlayIcon === "pause"
    ? 1
    : 0,

  transition: "opacity .45s ease",

  cursor: "pointer",

  pointerEvents: videoPausado
    ? "auto"
    : "none",
}}
/>

  

  

 <img
  src={avançar10segundos}
  alt=""
  onClick={(e) => {
    e.stopPropagation();

    const video =
      videoDriveRef.current;

    if (!video) return;

    video.currentTime += 10;

    socket.emit("seekVideo", {
      sala: salaAtual,
      tempo: video.currentTime,
    });
  }}
  style={{
    width: "28px",
    height: "28px",

    position: "relative",
    top: "-110px",

    transform: "scale(2.0)",

    opacity:
      videoPausado ||
      overlayIcon === "pause"
        ? 1
        : 0,

    transition: "opacity .45s ease",

    cursor: "pointer",

    pointerEvents: videoPausado
      ? "auto"
      : "none",
  }}
/>
      <img
  src={telacheia}
  alt=""
  onClick={() => {
    if (videoDriveRef.current?.requestFullscreen) {
      videoDriveRef.current.requestFullscreen();
    }
  }}
  style={{
    width: "65px",
    height: "65px",

    position: "absolute",
    top: "-43px",
    right: "-120px",

    opacity:
  videoPausado || overlayIcon === "pause"
    ? 1
    : 0,

    transition:
      "opacity .45s ease",

    cursor: "pointer",

    zIndex: 9999,
  }}
/>
</div>
</>
)}
</div>

<div
  style={{
    height: "32.2px",

    position: "relative",
    top: "-4.5px",

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
  src={lupa}
  alt=""
  onClick={() => setBuscaAberta(true)}
  style={{
    width: "48px",
    height: "48px",
    objectFit: "contain",
    cursor: "pointer",
    marginLeft: "29px",
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
  src={manete}
  alt=""
  onClick={() => setActiveScreen("games")}
  style={{
    width: "43px",
    height: "43px",
    objectFit: "contain",
    cursor: "pointer",
    marginRight: "23px",
  }}
/>

<div
  style={{
    position: "relative",
    width: "40px",
    height: "42px",
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
    width: "41px",
    height: "41px",
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

    height: "90.8%",

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
    tipo: "youtube",
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
) : driveAberto ? (
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
        onClick={() => setDriveAberto(false)}
        style={{
          width: "40px",
          height: "40px",
          cursor: "pointer",
        }}
      />

      <h2
        style={{
          color: "white",
        }}
      >
        Meu Drive
      </h2>
    </div>

    <div
      style={{
        padding: "20px",
        overflowY: "auto",
      }}
    >
      {arquivosDrive.map((arquivo) => (
  <div
    key={arquivo.id}
    onClick={() => {
      console.log(
        "ARQUIVO COMPLETO:",
        arquivo
      );

      const url =
`https://rumi-production-3089.up.railway.app/drive/stream/${arquivo.id}`;

      console.log(
        "URL ESCOLHIDA:",
        url
      );

      socket.emit("trocarVideo", {
        sala: salaAtual,
        videoId: arquivo.id,
        tipo: "drive",
      });

      setTipoVideo("drive");
      setVideoDriveUrl(url);

      setTimeout(() => {
        console.log(
          "tipoVideo depois:",
          tipoVideo
        );

        console.log(
          "videoDriveUrl depois:",
          videoDriveUrl
        );
      }, 1000);

      setDriveAberto(false);
      setBuscaAberta(false);
    }}
          style={{
            background:
              "rgba(255,255,255,.08)",
            padding: "15px",
            borderRadius: "12px",
            marginBottom: "10px",
            color: "white",
            cursor: "pointer",
          }}
        >
          🎬 {arquivo.name}
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
    loginGoogleDrive();
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
  ref={chatRef}
  style={{
    position: "absolute",
    top: "327px",
    left: 0,
    right: 0,
    bottom: "95px",

    overflowY: "auto",
    overflowX: "hidden",

    WebkitOverflowScrolling: "touch",

    padding: "5px",
    zIndex: 10,

    display: "flex",
    flexDirection: "column",
  }}
>
  <div
    style={{
      marginTop: "auto",
    }}
  >
    {mensagens.map((msg, index) => {
      const souEu = msg.nome === meuId;

      return (
        <div
          key={`${msg.nome}-${msg.figurinha || msg.texto}-${index}`}
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
                    textShadow:
                      "0 0 8px rgba(0,0,0,.8)",
                  }}
                >
                  {msg.nome}
                </div>
              )}

              {msg.figurinha ? (
                <img
  key={msg.figurinha}
  src={msg.figurinha}
                  alt=""
                  style={{
                    width: "115px",
                    maxWidth: "35vw",
                    borderRadius: "14px",
                    display: "block",
                    userSelect: "none",
                  }}
                />
              ) : (
                <div
                  style={{
                    background: "rgba(0,0,0,.45)",
                    backdropFilter: "blur(8px)",
                    color: "#fff",
                    padding: "10px 14px",
                    borderRadius: "16px",
                    maxWidth: "100%",
                    wordBreak: "break-word",
                    textAlign: souEu
                      ? "right"
                      : "left",
                  }}
                >
                  {msg.texto}
                </div>
              )}

            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

{painelFigurinhasAberto && (

  <div
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "84px",

      height: "260px",

      background: "rgba(22,22,22,.97)",

      backdropFilter: "blur(10px)",

      borderTopLeftRadius: "18px",
      borderTopRightRadius: "18px",

      overflowY: "auto",

      padding: "14px",

      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "12px",

      zIndex: 30,
    }}
  >

    {figurinhas.map((fig, index) => (

      <img
        key={index}
        src={fig}
        alt=""
        onClick={() => {

  enviarFigurinha(fig);

}}
        style={{
          width: "100%",
          aspectRatio: "1",

          objectFit: "contain",

          cursor: "pointer",

          transition: ".15s",

          borderRadius: "12px",
        }}
        onMouseDown={(e)=>{
          e.currentTarget.style.transform="scale(.94)";
        }}
        onMouseUp={(e)=>{
          e.currentTarget.style.transform="scale(1)";
        }}
        onMouseLeave={(e)=>{
          e.currentTarget.style.transform="scale(1)";
        }}
      />

    ))}

  </div>

)}

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
  ref={inputMensagemRef}
  value={novaMensagem}
  onChange={(e) => setNovaMensagem(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      enviarMensagem();

      setTimeout(() => {
        inputMensagemRef.current?.focus();
      }, 10);
    }
  }}
  placeholder="Bate-papo..."
  style={{
    width: "130px",
    minWidth: "130px",
    maxWidth: "130px",

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
    onClick={() =>
      setPainelFigurinhasAberto(
        !painelFigurinhasAberto
      )
    }
    style={{
      width: "52px",
      height: "52px",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      src={figurinha}
      alt="Figurinha"
      style={{
        width: "42px",
        height: "42px",
        objectFit: "contain",
      }}
    />
  </button>

  <button
    onClick={() => {
      enviarMensagem();

      setTimeout(() => {
        inputMensagemRef.current?.focus();
      }, 10);
    }}
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