export default function Item(props) {
    const texto = `Producto ${props.title}`
    console.log(texto)

    return <div className="item-card" style={ {border: "solid 1px grey", borderRadius: "15px", backgroundColor: "#0000", margin: "10px" }}>
        <img width={"120"} src={ props.img } alt="Collar" />
        <h4>{ props.title }</h4>
        <p>Precio: ${ props.price }</p>
        <button>Ver más</button>
    </div>

}
