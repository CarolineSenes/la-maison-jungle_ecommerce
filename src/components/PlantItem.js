import React from "react";
import "../styles/PlantItem.css";
import CareScale from "../components/CareScale";

const PlantItem = ({ name, cover, id, light, water, price }) => {
  function handleClick(e) {
    console.log(`Vous avez ajouté au panier la plante : `, e)
  }

  return (
    <li className="lmj-plant-item" key={id} onClick={()=>handleClick(name)}>
      <span className='lmj-plant-item-price'>{price}€</span>
      <img className="lmj-plant-item-cover" src={cover} alt={name} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
};

export default PlantItem;
