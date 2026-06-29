import "./GamesScreen.css";
import Rumi2 from "../../assets/Rumi2.png";
import TraveDireita from "../../assets/travedireita.png";
import TraveEsquerda from "../../assets/traveesquerda.png";
import Vs from "../../assets/vs.png";
import PlayerBottom from "../../assets/playerbottom.png";
import FundoBg from "../../assets/fundobg.png";
import JogadoresDireita from "../../assets/jogadoresdireita.png";
import JogadoresEsquerda from "../../assets/jogadoresesquerda.png";
import UsuarioMenino from "../../assets/usuariomenino.png";
import UsuarioMenina from "../../assets/usuariomenina.png";

export default function GamesScreen({
  onClose,
  avatarEscolhido,
  usuario,
  usuariosSala,
  nickEscolhido,
}) {

  const meuNome =
    nickEscolhido ||
    usuario?.displayName ||
    "Você";

  const listaUsuarios =
    usuariosSala && usuariosSala.length > 0
      ? usuariosSala
      : [
          {
            nome: meuNome,
          },
        ];

  return (
    <div
      className="games-screen"
      style={{
        backgroundImage: `url(${FundoBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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

        {[0, 1, 2, 3].map((index) => {

          const pessoa = listaUsuarios[index];

          if (!pessoa) {
            return (
              <div
                key={index}
                className="user-card"
                style={{
                  opacity: 0,
                  pointerEvents: "none",
                }}
              />
            );
          }

          return (

            <div
              key={index}
              className="user-card"
              style={{
                backgroundImage: `url(${
                  pessoa.nome === meuNome
                    ? (
                        avatarEscolhido === "menina"
                          ? UsuarioMenina
                          : UsuarioMenino
                      )
                    : UsuarioMenino
                })`,
              }}
            >

              <span>{pessoa.nome}</span>

            </div>

          );

        })}

      </div>

      {/* PARTE DE BAIXO */}

      <div className="games-bottom">

        {/* ESQUERDA */}

        <div className="games-vs">

          {[1, 2, 3, 4].map((item) => (
            <div
              className="vs-row"
              key={item}
            >

              <div className="circle-wrapper-left">

                <img
                  src={JogadoresEsquerda}
                  alt=""
                  className="jogadores-esquerda-image"
                />

                <div className="circle"></div>

                <img
                  src={TraveEsquerda}
                  alt=""
                  className="trave-esquerda"
                />

              </div>

              <img
                src={Vs}
                alt="VS"
                className="vs-image"
              />

              <div className="circle-wrapper-right">

                <img
                  src={JogadoresDireita}
                  alt=""
                  className="jogadores-direita-image"
                />

                <div className="circle"></div>

                <img
                  src={TraveDireita}
                  alt=""
                  className="trave-direita"
                />

              </div>

            </div>
          ))}

        </div>

        {/* DIREITA */}

        <div className="games-play">

          <img
            src={PlayerBottom}
            alt="PlayerBottom"
            className="play-bottom-image"
          />

        </div>

      </div>

      {/* BARRA INFERIOR */}

      <div className="challenge-buttons">

        <button>
          Normal
        </button>

        <button>
          Ranqueada
        </button>

      </div>

    </div>
  );
}