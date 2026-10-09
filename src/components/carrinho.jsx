    import { useState } from "react";
    
    
    const pratos = [
      {id:1, nome:"pizza de cerebro",preco:45,disponivel:true},
      {id:2, nome:"pizza de coração ",preco:85,disponivel:true},
      {id:3, nome:"pizza de figado ",preco:45,disponivel:true},
      {id:4, nome:"sorvete de pele humana",preco:45,disponivel:false}
    ]


function carrinho (props){
    const [itens, setItens] = useState([]);

    const pratosNoCarrinho = []

    const listaPratos = itens
    .filter((prato) => prato.id > 0)
    .map((prato) => (
        <li key={prato.id}>{prato.disponivel ? prato.nome : `${prato.nome} - Esgotado` } </li>
    ));

    function deletar(prato){}


    return(
        <div className="carrinho">
            <h2>{props.titulo}</h2>
            <p>{props.descricao}</p>
            <div className="centralizar">
                <ul onClick={()=>setItens([...itens.splice(1)])}>{listaPratos}</ul>
            </div>
            <button onClick={()=>setItens([...itens,pratos.find(prato => prato.id === 1)])}>pizza de cerebro</button>
            <button onClick={()=>setItens([...itens,pratos.find(prato => prato.id === 2)])}>pizza de coração</button>
            <button onClick={()=>setItens([...itens,pratos.find(prato => prato.id === 3)])}>pizza de figado</button>
        </div>
    )
}

export default carrinho;