import { useState } from "react";



function contador(props){
    const [contador, setContador] = useState(0);

    function valida_numero(contador){
    if(contador < 1){
        setContador(1)
        return contador
    }
    return contador
}
    
  

    return(
        <div className="contador">
            <h2>{props.titulo}</h2>
            <p>{valida_numero(contador)}</p>
            <button onClick={()=> setContador(contador + 1)}>Aumentar</button>
            <button onClick={()=>setContador( contador - 1)}>Diminuir</button>
        </div>
    )
}

export default contador;