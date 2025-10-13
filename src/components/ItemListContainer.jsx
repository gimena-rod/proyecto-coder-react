import Item from "./Item";
import getData, { getProductsByCategory } from "../data/apiService.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const { catParam } = useParams();

  useEffect(() => {
    if (catParam) {
      getProductsByCategory(catParam).then((data) => setProductos(data));
    } else {
      getData().then((data) => {
        console.log("Todos los productos recibidos", data);
        setProductos(data);
      });
    }
  }, [catParam]);

  return (
    <section className="Itemlist">
      <h3> {props.greeting} </h3>
      {productos.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </section>
  );
}
export default ItemListContainer;
