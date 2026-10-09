import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";

import pizzaLogo from "./img/hydra_sem_fundo.png";


import Card from "./components/card";
import Contador from "./components/contador"
import Carrinho from "./components/carrinho"
import Header from "./components/header";




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1>Funerária pizzaria</h1>
    <img src={pizzaLogo} alt="Logo da Pizzaria Hydra" className="Logo" />

    <div className="centralizar">
      <Header titulo="Sobre nós" descricao="O morto de ontem, é a pizza do dia!" />
    </div>

    <div className="centralizar">
      <Card titulo="cardápio"/>
    </div>

    <div className="centralizar">
      <Contador titulo="Reserva para quantas pessoas"/>
    </div>

    <div className="centralizar">
      <Carrinho titulo="Carrinho da reserva" descricao="clique no item que foi adicionado ao carrinho para deletar"/>
    </div>
    </>

  );
}

export default App;
