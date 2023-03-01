import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => {
      const modifiedData = data.map(plant => {
        return {...plant, isSoldOut: true}
      })
      setPlantData(modifiedData)
    })
  },[])
  
  const addNewPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type" : "Application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(data => setPlantData(
      [...plantData, data]
    ))
  }

  const plantStock = (soldPlant) => {
    const updatedPlants = plantData.map(plant => {
      if(plant.id === soldPlant.id) {
        return {...plant, isSoldOut: !plant.isSoldOut};
      } else {
        return plant
      }
    })
    setPlantData(updatedPlants);
  }

  const plantSearch = (search) => {
    setSearchInput(search)
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search plantSearch={plantSearch}/>
      <PlantList plantData={plantData.filter(plant => plant.name.toLowerCase().includes(searchInput.toLowerCase()))} plantStock={plantStock}/>
    </main>
  );
}

export default PlantPage;
