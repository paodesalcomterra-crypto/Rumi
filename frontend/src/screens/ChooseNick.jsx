import "./ChooseNick.css";
import { useState } from "react";
import Escolha from "../assets/escolha.png";

export default function ChooseNick({ onConfirm }) {

  const [nick, setNick] = useState("");

  return (
    <div
      className="choose-nick"
      style={{
        backgroundImage: `url(${Escolha})`,
      }}
    >

      <input
        className="nick-input"
        type="text"
        maxLength={8}
        placeholder="Digite seu nick..."
        value={nick}
        onChange={(e) => setNick(e.target.value)}
      />

      <div className="nick-info">
        O nick deve ter no máximo 8 dígitos
      </div>

      <button
        className="nick-confirm"
        disabled={!nick.trim()}
        onClick={() => onConfirm(nick.trim())}
      >
        Continuar
      </button>

    </div>
  );
}