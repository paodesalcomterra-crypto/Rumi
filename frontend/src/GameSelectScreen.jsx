import { useEffect, useState } from "react";

import Rumi from "./assets/Rumi.png";

import jokenpo from "./assets/jokenpo.png";
import quizhellokitty from "./assets/quizhellokitty.png";
import domino from "./assets/domino.png";
import pintar from "./assets/pintar.png";
import quemsoueu from "./assets/quemsoueu.png";
import pembolim from "./assets/pembolim.png";
import sinuca from "./assets/sinuca.png";

import fechar from "./assets/fechar.png";

export default function GameSelectScreen({
  onClose,
}) {

  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMostrar(true);
    }, 40);
  }, []);

  const jogos = [
    jokenpo,
    quizhellokitty,
    domino,
    pintar,
    quemsoueu,
    pembolim,
    sinuca,
  ];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,

        background: "#0f0f0f",

        zIndex: 999999,

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* TOPO */}

      <div
        style={{
          width: "100%",
          height: "82px",

          display: "flex",
          alignItems: "center",

          position: "relative",
        }}
      >
        <img
          src={fechar}
          alt=""
          onClick={onClose}
          style={{
            width: "28px",
            height: "28px",

            marginLeft: "24px",

            cursor: "pointer",
          }}
        />

        <img
          src={Rumi}
          alt=""
          style={{
            width: "125px",

            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* JOGOS */}

      <div
        style={{
          width: "100%",
          maxWidth: "760px",

          marginTop: "18px",

          display: "flex",
          flexDirection: "column",

          gap: "14px",

          padding: "0 22px",
          boxSizing: "border-box",
        }}
      >
        {/* JOKENPO */}

<img
  src={jokenpo}
  alt=""
  onClick={() => {}}
  onMouseDown={(e) => e.currentTarget.style.scale = ".97"}
  onMouseUp={(e) => e.currentTarget.style.scale = "1"}
  onMouseLeave={(e) => e.currentTarget.style.scale = "1"}
  onTouchStart={(e) => e.currentTarget.style.scale = ".97"}
  onTouchEnd={(e) => e.currentTarget.style.scale = "1"}
  style={{
    width: "100%",
    height: "auto",
    marginTop: "0px",
    marginLeft: "0px",
    cursor: "pointer",
    userSelect: "none",
    scale: "1",
    transition: "transform .18s ease, opacity .35s cubic-bezier(.22,1,.36,1)",
    opacity: mostrar ? 1 : 0,
    transform: mostrar ? "translateY(0)" : "translateY(26px)",
    transitionDelay: "0ms",
    filter: "drop-shadow(0 8px 18px rgba(0,0,0,.22))",
  }}
/>

{/* QUIZ */}

<img
  src={quizhellokitty}
  alt=""
  onClick={() => {}}
  onMouseDown={(e) => e.currentTarget.style.scale = ".97"}
  onMouseUp={(e) => e.currentTarget.style.scale = "1"}
  onMouseLeave={(e) => e.currentTarget.style.scale = "1"}
  onTouchStart={(e) => e.currentTarget.style.scale = ".97"}
  onTouchEnd={(e) => e.currentTarget.style.scale = "1"}
  style={{
    width: "100%",
    height: "auto",
    marginTop: "0px",
    marginLeft: "0px",
    cursor: "pointer",
    userSelect: "none",
    scale: "1",
    transition: "transform .18s ease, opacity .35s cubic-bezier(.22,1,.36,1)",
    opacity: mostrar ? 1 : 0,
    transform: mostrar ? "translateY(0)" : "translateY(26px)",
    transitionDelay: "90ms",
    filter: "drop-shadow(0 8px 18px rgba(0,0,0,.22))",
  }}
/>

{/* DOMINO */}

<img
  src={domino}
  alt=""
  onClick={() => {}}
  onMouseDown={(e) => e.currentTarget.style.scale = ".97"}
  onMouseUp={(e) => e.currentTarget.style.scale = "1"}
  onMouseLeave={(e) => e.currentTarget.style.scale = "1"}
  onTouchStart={(e) => e.currentTarget.style.scale = ".97"}
  onTouchEnd={(e) => e.currentTarget.style.scale = "1"}
  style={{
    width: "100%",
    height: "auto",
    marginTop: "0px",
    marginLeft: "0px",
    cursor: "pointer",
    userSelect: "none",
    scale: "1",
    transition: "transform .18s ease, opacity .35s cubic-bezier(.22,1,.36,1)",
    opacity: mostrar ? 1 : 0,
    transform: mostrar ? "translateY(0)" : "translateY(26px)",
    transitionDelay: "180ms",
    filter: "drop-shadow(0 8px 18px rgba(0,0,0,.22))",
  }}
/>

{/* PINTAR */}

<img
  src={pintar}
  alt=""
  onClick={() => {}}
  onMouseDown={(e) => e.currentTarget.style.scale = ".97"}
  onMouseUp={(e) => e.currentTarget.style.scale = "1"}
  onMouseLeave={(e) => e.currentTarget.style.scale = "1"}
  onTouchStart={(e) => e.currentTarget.style.scale = ".97"}
  onTouchEnd={(e) => e.currentTarget.style.scale = "1"}
  style={{
    width: "100%",
    height: "auto",
    marginTop: "0px",
    marginLeft: "0px",
    cursor: "pointer",
    userSelect: "none",
    scale: "1",
    transition: "transform .18s ease, opacity .35s cubic-bezier(.22,1,.36,1)",
    opacity: mostrar ? 1 : 0,
    transform: mostrar ? "translateY(0)" : "translateY(26px)",
    transitionDelay: "270ms",
    filter: "drop-shadow(0 8px 18px rgba(0,0,0,.22))",
  }}
/>

{/* QUEM SOU EU */}

<img
  src={quemsoueu}
  alt=""
  onClick={() => {}}
  onMouseDown={(e) => e.currentTarget.style.scale = ".97"}
  onMouseUp={(e) => e.currentTarget.style.scale = "1"}
  onMouseLeave={(e) => e.currentTarget.style.scale = "1"}
  onTouchStart={(e) => e.currentTarget.style.scale = ".97"}
  onTouchEnd={(e) => e.currentTarget.style.scale = "1"}
  style={{
    width: "100%",
    height: "auto",
    marginTop: "0px",
    marginLeft: "0px",
    cursor: "pointer",
    userSelect: "none",
    scale: "1",
    transition: "transform .18s ease, opacity .35s cubic-bezier(.22,1,.36,1)",
    opacity: mostrar ? 1 : 0,
    transform: mostrar ? "translateY(0)" : "translateY(26px)",
    transitionDelay: "360ms",
    filter: "drop-shadow(0 8px 18px rgba(0,0,0,.22))",
  }}
/>

{/* PEBOLIM */}

<img
  src={pembolim}
  alt=""
  onClick={() => {}}
  onMouseDown={(e) => e.currentTarget.style.scale = ".97"}
  onMouseUp={(e) => e.currentTarget.style.scale = "1"}
  onMouseLeave={(e) => e.currentTarget.style.scale = "1"}
  onTouchStart={(e) => e.currentTarget.style.scale = ".97"}
  onTouchEnd={(e) => e.currentTarget.style.scale = "1"}
  style={{
    width: "100%",
    height: "auto",
    marginTop: "0px",
    marginLeft: "0px",
    cursor: "pointer",
    userSelect: "none",
    scale: "1",
    transition: "transform .18s ease, opacity .35s cubic-bezier(.22,1,.36,1)",
    opacity: mostrar ? 1 : 0,
    transform: mostrar ? "translateY(0)" : "translateY(26px)",
    transitionDelay: "450ms",
    filter: "drop-shadow(0 8px 18px rgba(0,0,0,.22))",
  }}
/>

{/* SINUCA */}

<img
  src={sinuca}
  alt=""
  onClick={() => {}}
  onMouseDown={(e) => e.currentTarget.style.scale = ".97"}
  onMouseUp={(e) => e.currentTarget.style.scale = "1"}
  onMouseLeave={(e) => e.currentTarget.style.scale = "1"}
  onTouchStart={(e) => e.currentTarget.style.scale = ".97"}
  onTouchEnd={(e) => e.currentTarget.style.scale = "1"}
  style={{
    width: "100%",
    height: "auto",
    marginTop: "0px",
    marginLeft: "0px",
    cursor: "pointer",
    userSelect: "none",
    scale: "1",
    transition: "transform .18s ease, opacity .35s cubic-bezier(.22,1,.36,1)",
    opacity: mostrar ? 1 : 0,
    transform: mostrar ? "translateY(0)" : "translateY(26px)",
    transitionDelay: "540ms",
    filter: "drop-shadow(0 8px 18px rgba(0,0,0,.22))",
  }}
/>
      </div>

    </div>
  );
}