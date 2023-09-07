// New.jsx
// const React = require('react');


// export const AddItemForm = () => {
//   return (
//     <div className="addItemFormContainer">
//       <div>
//       <h1>Add Item to Store</h1>
//       <form>
//         <label htmlFor="name"> Product Name:</label>
//         <input type="text" id="name" name="name" required /><br /><br />

//         <label htmlFor="price">Price:</label>
//         <input type="number" id="price" name="price" step="0.01" required /><br /><br />

//         <label htmlFor="quantity">Quantity:</label>
//         <input type="number" id="quantity" name="quantity" required /><br /><br />

//         <label htmlFor="image">Image URL:</label>
//         <input type="url" id="image" name="image" required /><br /><br />

//         <input type="submit" value="Add Item" />
//       </form>
//     </div>
//     </div>
//   );
// };

// src/AddItemForm.js
// import React, { useState } from 'react';

// function AddItemForm() {
//   const [itemName, setItemName] = useState('');
//   const [itemDescription, setItemDescription] = useState('');
//   const [itemPrice, setItemPrice] = useState('');
//   const [itemQuantity, setItemQuantity] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create an object to represent the new item
//     const newItem = {
//       name: itemName,
//       description: itemDescription,
//       price: parseFloat(itemPrice),
//       quantity: parseInt(itemQuantity),
//     };

    // Send a POST request to your backend to save the new item in the MongoDB database
//     try {
//       const response = await fetch('/api/items', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newItem),
//       });

//       if (response.status === 201) {
//         // Item added successfully
//         alert('Item added successfully!');
//         // Clear the form fields
//         setItemName('');
//         setItemDescription('');
//         setItemPrice('');
//         setItemQuantity('');
//       } else {
//         alert('Error adding item');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error adding item');
//     }
//   };

//   return (
//     <div>
//       <h2>Add Item to Store</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={itemName}
//             onChange={(e) => setItemName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea
//             value={itemDescription}
//             onChange={(e) => setItemDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Price:</label>
//           <input
//             type="number"
//             value={itemPrice}
//             onChange={(e) => setItemPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Quantity:</label>
//           <input
//             type="number"
//             value={itemQuantity}
//             onChange={(e) => setItemQuantity(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Add Item</button>
//       </form>
//     </div>
//   );
// }

// export default AddItemForm;

