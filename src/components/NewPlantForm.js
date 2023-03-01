import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPlant ={
      name: nameInput,
      image: imageInput,
      price: priceInput,
      isSoldOut: true,
    }
    addNewPlant(newPlant);
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={imageInput} onChange={(e) => setImageInput(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={priceInput} onChange={(e) => setPriceInput(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
