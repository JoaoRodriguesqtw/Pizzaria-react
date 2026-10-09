    const pratos = [
      {id:1, nome:"pizza de cerebro",preco:45,disponivel:true},
      {id:2, nome:"pizza de coração (humano)",preco:85,disponivel:true},
      {id:3, nome:"pizza de figado (humano)",preco:45,disponivel:true},
      {id:4, nome:"sorvete de pele humana",preco:45,disponivel:false}
    ]

// const somar = ()=>{setTotal(total + 1)} terminar depois
function Card(props){



const listaPratos = pratos
  .filter((prato) => prato.id > 0)
  .map((prato) => (
    <li key={prato.id}>{prato.disponivel ? prato.nome : `${prato.nome} - Esgotado` } </li>
  ));


    return(
        <div className="card">
            <h2>{props.titulo}</h2>
            <ul>{listaPratos}</ul>
            
        </div>
    )
}

export default Card;