import "./ChooseAvatar.css";
import { useState } from "react";
import Escolha from "../assets/escolha.png";

export default function ChooseAvatar({ onChoose }) {

  const [selecionado, setSelecionado] = useState(null);

  return (
    <div
      className="choose-avatar"
      style={{
        backgroundImage: `url(${Escolha})`,
      }}
    >

      <div className="avatar-buttons">

        {/* BOLINHA ROSA (EM CIMA) */}

        <div
          className="avatar-option"
          onClick={() => setSelecionado("menina")}
        >
          <div
            className="avatar-circle"
            style={{
              background: "#c04585",
              opacity:
                selecionado === "menina"
                  ? 1
                  : 0.08,
            }}
          />
        </div>

        {/* BOLINHA AZUL (EMBAIXO) */}

        <div
          className="avatar-option"
          onClick={() => setSelecionado("menino")}
          style={{
            marginTop: "30px", // aumente esse valor para descer só a azul
          }}
        >
          <div
            className="avatar-circle"
            style={{
              background: "#0e4df9",
              opacity:
                selecionado === "menino"
                  ? 1
                  : 0.08,
            }}
          />
        </div>

      </div>

      <button
        className="avatar-confirm"
        disabled={!selecionado}
        onClick={() => onChoose(selecionado)}
      >
        Continuar
      </button>

    </div>
  );
}