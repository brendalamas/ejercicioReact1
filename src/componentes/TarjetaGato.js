import "./TarjetaGato.css";


const TarjetaGato = ({nombre, descripcion, imagen})=>{
    console.log(descripcion);
    return (
        <div className="tarjeta-gato">
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <img src={imagen}/>
        </div>
        
    )
}

export default TarjetaGato;