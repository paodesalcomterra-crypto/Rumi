import { useState } from "react";
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
import Normal from "../../assets/normal.png";
import Ranqueada from "../../assets/ranqueada.png";
import NormalRanqueada from "../../assets/normalranqueada.mp3";
import SoundStart from "../../assets/soundstart.m4a";

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

        const normalRanqueadaAudio = new Audio(NormalRanqueada);
const startAudio = new Audio(SoundStart);

function tocarNormalRanqueada() {
  normalRanqueadaAudio.currentTime = 0;
  normalRanqueadaAudio.play();
}

function tocarStart() {
  startAudio.currentTime = 0;
  startAudio.play();
}

        const [jogadoresSelecionados, setJogadoresSelecionados] =
  useState([
    {
      lado: "esquerda",
      foto: usuario?.photoURL || "",
      nome: meuNome,
    },
  ]);

function selecionarJogador(pessoa) {

  if (pessoa.nome === meuNome) return;

  const existe =
    jogadoresSelecionados.find(
      j => j.nome === pessoa.nome
    );

  if (existe) return;

  const esquerda =
    jogadoresSelecionados.filter(
      j => j.lado === "esquerda"
    ).length;

  const direita =
    jogadoresSelecionados.filter(
      j => j.lado === "direita"
    ).length;

  const lado =
    direita < esquerda
      ? "direita"
      : "esquerda";

  setJogadoresSelecionados([
    ...jogadoresSelecionados,
    {
      lado,
      nome: pessoa.nome,
      foto: pessoa.foto || "",
    }
  ]);

}

const quantidadeCards =
  listaUsuarios.length <= 2
    ? 2
    : listaUsuarios.length <= 4
      ? 4
      : listaUsuarios.length;

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

      {Array.from({ length: quantidadeCards }).map((_, index) => {

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

        const selecionado =
          jogadoresSelecionados.some(
            j => j.nome === pessoa.nome
          );

        return (

          <div
            key={index}
            onClick={() => selecionarJogador(pessoa)}
            className="user-card"
            style={{
              cursor:
                pessoa.nome === meuNome
                  ? "default"
                  : "pointer",

              transform:
                selecionado
                  ? "scale(.97)"
                  : "scale(1)",

              transition: "transform .12s",

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

        {[1, 2, 3, 4, 5].map((item) => (
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

              <div className="circle">

                {jogadoresSelecionados
                  .filter(j => j.lado === "esquerda")[item - 1]?.foto && (
                  <img
                    src={
                      jogadoresSelecionados
                        .filter(j => j.lado === "esquerda")[item - 1].foto
                    }
                    alt=""
                    className="player-photo"
                  />
                )}

              </div>
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

      <div className="circle">

        {jogadoresSelecionados
          .filter(j => j.lado === "direita")[item - 1]?.foto && (
          <img
            src={
              jogadoresSelecionados
                .filter(j => j.lado === "direita")[item - 1].foto
            }
            alt=""
            className="player-photo"
          />
        )}

      </div>

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
  onClick={tocarStart}
/>

        </div>

      </div>

      {/* BARRA INFERIOR */}

<div className="challenge-buttons">

  <button onClick={tocarNormalRanqueada}>

    <img
      src={Normal}
      alt="Normal"
      className="challenge-image"
    />

  </button>

  <button onClick={tocarNormalRanqueada}>

    <img
      src={Ranqueada}
      alt="Ranqueada"
      className="challenge-image"
    />

  </button>

</div>

    </div>
  );
}