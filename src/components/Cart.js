import { useState } from "react";
import "../styles/Cart.css";

const Cart = ({ cart, updateCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  function removePlant(name) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);

    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([...cartFilteredCurrentPlant]);
    }
  }

  function addToCart(name, price) {
    //vérifie si plate est déjà présente dans le state "cart" (donc dans la liste du panier)
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    //si la plante existe déjà, on créé un nouveau tableau sans elle
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      //met à jour le state "cart" avec les données du nouveau tableau "cartFilteredCurrentPlant" et on la rajoute (sous forme d'objet) en ajoutant 1 à sa quantité
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  function removeFromCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved.amount !== 1) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount - 1 },
      ]);
    } else {
      removePlant(name)
    }
  }

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>

      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul className="lmj-cart-list">
            {cart.map(({ name, price, amount }, index) => (
              <div className="lmj-cart-list-item" key={`${name}-${index}`}>
                {name} {price}€{" "}
                <ion-icon
                  name="add"
                  onClick={() => addToCart(name, price)}
                ></ion-icon>{" "}
                {amount}{" "}
                <ion-icon
                  name="remove"
                  onClick={() => removeFromCart(name, price)}
                ></ion-icon>
                <ion-icon
                  name="trash"
                  onClick={() => removePlant(name)}
                ></ion-icon>{" "}
              </div>
            ))}
          </ul>
          <h3>Total : {total}€</h3>
          <button onClick={() => updateCart([])}>Vider</button>
        </div>
      ) : (
        <div>Votre panier est vide.</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le panier
      </button>
    </div>
  );
};

export default Cart;
