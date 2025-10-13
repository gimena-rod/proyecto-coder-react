import { getProductById } from "../data/apiService";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

function ItemDetailContainer() {
  const [itemData, setItemData] = useState({ loading: true });
  const { idParam } = useParams();

  console.log("params: ", idParam);
  useEffect(() => {
    getProductById(idParam).then((res) => setItemData(res));
  }, [idParam]);

  return (
    <div
      className="item-card"
      style={{
        border: "solid 1px grey",
        backgroundColor: "#131111ff",
        margin: "10px",
      }}
    >
      {
      itemData.loading 
      ? (<BeatLoader color={"#ff2288"} size={10} />) 
      : (
        <div>
          <img width="120" src={itemData.img} alt="collar" />
          <h4>{itemData.title}</h4>
          <p>Precio: $ {itemData.price}</p>
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
