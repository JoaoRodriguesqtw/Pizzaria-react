import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
// import imagemMangas from "./img/manga.jpg";
// import imagemEvangelion from "./img/evangelion.jpg";
import imagemFullmetal from "./img/fullmetal.jpg";
import imagemBebop from "./img/cowboybebop.jpg";
import imagemBatman from "./img/batman.jpg"
import Card from "./components/card";
import Contador from "./components/contador"
import Carrinho from "./components/carrinho"
import Header from "./components/header";

// const batman = <img src={imagemBatman} className="img-card"/> ;
// const fullmetal = <img src={imagemFullmetal} className="img-card" />;
// const bebop = <img src={imagemBebop} className="img-card"/>



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1>Funerária pizzaria</h1>

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
