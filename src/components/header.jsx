

function Header(props){
    return(
        <div className="header">
            <h2>{props.titulo}</h2>
            <p>{props.descricao}</p>
        </div>
    )
}

export default Header;