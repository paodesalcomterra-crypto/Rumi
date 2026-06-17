import { useState, useEffect } from "react";

import Home from "./Home";
import Room from "./Room";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [codigoSala, setCodigoSala] = useState("");
  const [salaAtual, setSalaAtual] = useState(null);

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
  const unsubscribe =
    onAuthStateChanged(auth, (user) => {
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

  if (salaAtual) {
    return (
      <Room
        salaAtual={salaAtual}
        usuario={usuario}
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
    />
  );
}

export default App;