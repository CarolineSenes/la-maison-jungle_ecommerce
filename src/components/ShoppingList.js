import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import "../App.css"
import PlantItem from "../components/PlantItem";
import Categories from "./Categories";
import { useState } from "react";

const ShoppingList = ({ cart, updateCart }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const [alert, setAlert] = useState(false);


  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {
    //vérifie si plate est déjà présente dans le state "cart" (donc dans la liste du panier)
    const currentPlantSaved = cart.find((plant) => plant.name === name);

    //si la plante existe déjà, on créé un nouveau tableau sans elle
    if (currentPlantSaved) {
      setAlert(true);

      //sinon on retourne le state "cart" existant auquel on rajoute la plante avec une quantité de 1
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">
      {alert && (
        <div className="lmj-alert">
          <span>La plante existe déjà dans le panier</span>
          <ion-icon
            name="close-outline"
            onClick={() => setAlert(false)}
          ></ion-icon>
        </div>
      )}
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ul className="lmj-plant-list">
        {plantList.map(({ name, cover, id, light, water, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <PlantItem
                name={name}
                cover={cover}
                id={id}
                light={light}
                water={water}
                price={price}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default ShoppingList;
