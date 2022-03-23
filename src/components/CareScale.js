import React from "react";
import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

const quantityLabel = {
  1: "peu",
  2: "modérement",
  3: "beaucoup",
};

const CareScale = ({ scaleValue, careType }) => {
  const range = [1, 2, 3];

  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun icon" />
    ) : (
      <img src={Water} alt="water icon" />
    );

  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityLabel[scaleValue]} ${
            careType === "light" ? "de lumière" : `d'arrosage`
          }`
        )
      }
    >
      {range.map((rangeElmt) =>
        scaleValue >= rangeElmt ? (
          <span key={rangeElmt.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
};

export default CareScale;
