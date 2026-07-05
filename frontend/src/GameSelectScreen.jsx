import Rumi from "./assets/Rumi.png";

import jokenpo from "./assets/jokenpo.png";
import quizhellokitty from "./assets/quizhellokitty.png";

import fechar from "./assets/fechar.png";

export default function GameSelectScreen({
  onClose,
}) {
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

      {/* CARDS */}

      <div
        style={{
          width: "100%",
          maxWidth: "760px",

          marginTop: "18px",

          display: "flex",
          flexDirection: "column",
          gap: "16px",

          padding: "0 22px",
          boxSizing: "border-box",
        }}
      >
        {/* JOKENPO */}

        <div
          style={{
            height: "86px",

            background: "#358A15",

            borderRadius: "22px",

            display: "flex",
            alignItems: "center",

            cursor: "pointer",
          }}
        >
          <img
            src={jokenpo}
            alt=""
            style={{
              width: "96px",
              height: "96px",

              objectFit: "contain",

              marginLeft: "14px",
            }}
          />

          <span
            style={{
              color: "#fff",

              fontSize: "27px",
              fontWeight: 700,

              marginLeft: "18px",

              textShadow:
                "0 1px 2px rgba(0,0,0,.18)",
            }}
          >
            Jokenpo
          </span>
        </div>

        {/* QUIZ */}

        <div
          style={{
            height: "86px",

            background: "#FFECF7",

            borderRadius: "22px",

            display: "flex",
            alignItems: "center",

            cursor: "pointer",
          }}
        >
          <img
            src={quizhellokitty}
            alt=""
            style={{
              width: "96px",
              height: "96px",

              objectFit: "contain",

              marginLeft: "14px",
            }}
          />

          <span
            style={{
              color: "#fff",

              fontSize: "27px",
              fontWeight: 700,

              marginLeft: "18px",

              textShadow:
                "0 1px 3px rgba(0,0,0,.28)",
            }}
          >
            Quiz
          </span>
        </div>
      </div>
    </div>
  );
}