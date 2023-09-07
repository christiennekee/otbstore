//import React from "react";
// import { PRODUCTS } from "../../products";
// import { Product } from "./product";


import React, { useState } from 'react';

export const AddItemForm = () => {
//function AddItemForm() {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object to represent the new item
    const newItem = {
      name: itemName,
      description: itemDescription,
      price: parseFloat(itemPrice),
      quantity: parseInt(itemQuantity),
    };

    // Send a POST request to your backend to save the new item in the MongoDB database
     try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (response.status === 201) {
        // Item added successfully
        alert('Item added successfully!');
        // Clear the form fields
        setItemName('');
        setItemDescription('');
        setItemPrice('');
        setItemQuantity('');
      } else {
        alert('Error adding item');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding item');
    }
  };

  return (
    <div>
      <h2>Add Item to Store</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

