import "./GamesScreen.css";

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

        <h2 className="games-title">Rumi</h2>

      </div>

    </div>
  );
}