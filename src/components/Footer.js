import { useState } from "react";
import "../styles/Footer.css";
import "../App.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");
  const [alert, setAlert] = useState(false);

  function handelClick() {
    if (!inputValue.includes("@")) {
      setAlert(true);
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <div className="lmj-footer-email">
        <input
          className="lmj-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={()=>handelClick()}>Envoyer</button>
      </div>

      {alert && (
        <div className="lmj-alert">
          <span>Cet email n'est pas valide, il manque un @.</span>
          <ion-icon
            name="close-outline"
            onClick={() => setAlert(false)}
          ></ion-icon>
        </div>
      )}
    </footer>
  );
}

export default Footer;
