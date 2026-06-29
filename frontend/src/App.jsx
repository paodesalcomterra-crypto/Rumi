import { useState, useEffect } from "react";

import Home from "./Home";
import Room from "./Room";
import ChooseAvatar from "./screens/ChooseAvatar";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [codigoSala, setCodigoSala] = useState("");
  const [salaAtual, setSalaAtual] = useState(null);

  const [usuario, setUsuario] = useState(null);
  const [avatarEscolhido, setAvatarEscolhido] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });

    return () => unsubscribe();
  }, []);

  function criarSala() {
    const codigo = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();

    setSalaAtual(codigo);
  }

  function entrarSala() {
    if (codigoSala.trim() === "") return;

    setSalaAtual(codigoSala.toUpperCase());
  }

  if (!avatarEscolhido) {
    return (
      <ChooseAvatar
        onChoose={(avatar) => setAvatarEscolhido(avatar)}
      />
    );
  }

  if (salaAtual) {
    return (
      <Room
        salaAtual={salaAtual}
        usuario={usuario}
        avatarEscolhido={avatarEscolhido}
      />
    );
  }

  return (
    <Home
      criarSala={criarSala}
      entrarSala={entrarSala}
      codigoSala={codigoSala}
      setCodigoSala={setCodigoSala}
      usuario={usuario}
      setUsuario={setUsuario}
      avatarEscolhido={avatarEscolhido}
    />
  );
}

export default App;