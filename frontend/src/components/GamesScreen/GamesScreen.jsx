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

    </div>
  );
}