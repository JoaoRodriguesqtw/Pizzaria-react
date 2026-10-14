import { useState } from "react";

function reserva(props) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  const nome_completo = `   Reserva em nome de: ${nome} ${sobrenome}`

const [visivel, setVisivel] = useState(false);


 const mostrar = () => {
    setVisivel(!visivel);
  
}


  return (
    <div className="reserva">
      <h2>{props.titulo}</h2>
      <p>{props.descricao}</p>
      <div className="centralizar">
        <div>
          <p>Escreva seu nome</p>
          <input
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
          />
        </div>

        <div>
          <p>Escreva seu sobrenome</p>
          <input
            value={sobrenome}
            onChange={(evento) => setSobrenome(evento.target.value)}
          />
        </div>


        <button onClick={mostrar}>Enviar</button>
        {visivel && <p>{nome_completo}</p>}
      </div>
    </div>
  );
}

export default reserva;
