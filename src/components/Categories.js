import React from "react";
import "../styles/Categories.css";
import "../App.css"

const Categories = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="lmj-categories">
      <select value={activeCategory} onChange={(e)=>setActiveCategory(e.target.value)} className="lmj-select">
        <option value=''>Toutes catégories</option>
        {categories.map((cat) => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={()=>setActiveCategory('')}>Réinitialiser</button>
    </div>
  );
};

export default Categories;
