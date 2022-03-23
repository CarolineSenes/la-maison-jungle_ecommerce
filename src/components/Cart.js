import { useState } from "react";
import "../styles/Cart.css";

const Cart = ({ cart, updateCart }) => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(cart);

  const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)


  function removePlant(name) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);

    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([...cartFilteredCurrentPlant]);
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
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
                <button onClick={() => removePlant(name)}>Supprimer</button>
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
