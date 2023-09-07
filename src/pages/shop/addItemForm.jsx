import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";


export const AddItemForm = () => {
  return (
    <div className="addItemFormContainer">
      <div>
      <h1>Add Item to Store</h1>
      <form>
        <label htmlFor="name"> Product Name:</label>
        <input type="text" id="name" name="name" required /><br /><br />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" step="0.01" required /><br /><br />

        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" required /><br /><br />

        <label htmlFor="image">Image URL:</label>
        <input type="url" id="image" name="image" required /><br /><br />

        <input type="submit" value="Add Item" />
      </form>
    </div>
    </div>
  );
};