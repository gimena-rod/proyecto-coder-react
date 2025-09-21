import Item from "./Item";
import collargato from "../assets/collargato.jpg";
import pufferRubi from "../assets/pufferRubi.jpeg";


function ItemListContainer( props ){
    return (
        <section className="itemlist">
            <h3> {props.greeting} </h3>
            <Item title="Collar para Gatos" img={collargato} price="2000"/>
            <Item title="Chaleco puffer" img={pufferRubi} price="20000"/>
        </section>
    )
}

export default ItemListContainer;