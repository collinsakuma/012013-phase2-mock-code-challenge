import React from "react";

function PlantCard({ plant, plantStock }) {
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.isSoldOut ? (
        <button className="primary" onClick={() => plantStock(plant)}>In Stock</button>
      ) : (
        <button onClick={() => plantStock(plant)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
