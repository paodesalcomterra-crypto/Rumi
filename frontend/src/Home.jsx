import {
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  auth,
  provider,
} from "./firebase";

function Home({
  criarSala,
  entrarSala,
  codigoSala,
  setCodigoSala,
  usuario,
  setUsuario,
}) {
  async function loginGoogle() {
  try {
    const resultado =
      await signInWithPopup(
        auth,
        provider
      );

    setUsuario(resultado.user);
  } catch (erro) {
    console.log(erro);

    alert(
      erro.code + "\n\n" + erro.message
    );
  }
}

async function sairDaConta() {
  try {
    await signOut(auth);
  } catch (erro) {
    console.log(erro);
  }
}

return (
  <div
    style={{
      backgroundColor: "#111",
      color: "white",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      padding: "20px",
    }}
  >
      <h1>Rumi</h1>

{!usuario ? (
  <button
    onClick={loginGoogle}
    style={{
      padding: "15px",
      width: "220px",
      fontSize: "18px",
    }}
  >
    Entrar com Google
  </button>
) : (
  <>
    <img
      src={usuario.photoURL}
      alt=""
      style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
      }}
    />

    <h3>{usuario.displayName}</h3>

    <button
      onClick={sairDaConta}
      style={{
        padding: "10px",
        width: "220px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      Sair da Conta
    </button>
  </>
)}

<button
  onClick={criarSala}
  style={{
    padding: "15px",
    width: "220px",
    fontSize: "18px",
  }}
>
  Criar Sala
</button>

<input
  placeholder="Código da Sala"
  value={codigoSala}
  onChange={(e) =>
    setCodigoSala(e.target.value)
  }
  style={{
    padding: "12px",
    width: "220px",
  }}
/>

<button
  onClick={entrarSala}
  style={{
    padding: "15px",
    width: "220px",
    fontSize: "18px",
  }}
>
  Entrar em Sala
</button>
</div>
);
}

export default Home;