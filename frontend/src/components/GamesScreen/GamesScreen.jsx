import "./GamesScreen.css";
import Rumi2 from "../../assets/Rumi2.png";

export default function GamesScreen({ onClose }) {
  return (
    <div className="games-screen">

      <div className="games-header">

        <button
          className="games-close"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={Rumi2}
          alt="Rumi"
          className="games-title-logo"
        />

      </div>

      {/* USUÁRIOS */}

      <div className="games-users">

        <button>João</button>
        <button>Maria</button>

        <button>Pedro</button>
        <button>Lucas</button>

      </div>

      {/* PARTE DE BAIXO */}

      <div className="games-bottom">

        {/* ESQUERDA */}

        <div className="games-vs">

          <div className="vs-row">
            <div className="circle"></div>
            <span>VS</span>
            <div className="circle"></div>
          </div>

          <div className="vs-row">
            <div className="circle"></div>
            <span>VS</span>
            <div className="circle"></div>
          </div>

          <div className="vs-row">
            <div className="circle"></div>
            <span>VS</span>
            <div className="circle"></div>
          </div>

          <div className="vs-row">
            <div className="circle"></div>
            <span>VS</span>
            <div className="circle"></div>
          </div>

          <div className="challenge-buttons">

            <button>
              Desafio Normal
            </button>

            <button>
              Desafio Ranqueado
            </button>

          </div>

        </div>

        {/* DIREITA */}

        <div className="games-play">

          <button className="play-button">

            ▶

          </button>

        </div>

      </div>

    </div>
  );
}