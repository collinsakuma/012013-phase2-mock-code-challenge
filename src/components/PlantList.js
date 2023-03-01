import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData, plantStock }) {
  const renderPlantCards = plantData.map(plant => <PlantCard key={plant.id} plant={plant} plantStock={plantStock}/>)
  
  return (
    <ul className="cards">{renderPlantCards}</ul>
  );
}

export default PlantList;
