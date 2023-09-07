// import { useState } from "react"
// import { useItemsContext } from "../hooks/useItemsContext";
// //import { useAuthContext } from "../hooks/useAuthContext";

// export const LoadForm = () => {
//   const { dispatch } = useItemsContext()
//   //const { user } = useAuthContext()

//   const [productName, setProductName] = useState('')
//   const [price, setPrice] = useState('')
//   const [quantity, setQuantity] = useState('')
//   const [image, setImage] = useState('')
//   const [error, setError] = useState(null)
//   const [emptyFields, setEmptyFields] = useState([])
  
//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const item = {productName, price, quantity, image}

//     const response = await fetch('/api/items', {
//       method: 'POST',
//       body: JSON.stringify(item),
//       headers: {
//         'Content-Type': 'application/json',
//         //'Authorization': `Bearer ${user.token}`
//       }
//     })
//     const json = await response.json()

//     if (!response.ok) {
//       setError(json.error)
//       setEmptyFields(json.emptyFields)
//     }
//     if (response.ok) {
//       setProductName('')
//       setPrice('')
//       setQuantity('')
//       setImage('')
//       setError(null)
//       setEmptyFields([])
//       dispatch({type: 'ADD_PRODUCT', payload: json})
//     }
//   }

//   return (
//     <form className="create" onSubmit={handleSubmit}>
//       <h3>Add a New Item</h3>

//       <label>Product Name:</label>
//       <input 
//         type= "text"
//         onChange={(e) => setProductName(e.target.value)}
//         value={productName}
//         className={emptyFields.includes('productName') ? 'error' : ''}
//       />

//       <label>Price:</label>
//       <input 
//         type="number"
//         onChange={(e) => setPrice(e.target.value)}
//         value={price}
//         className={emptyFields.includes('price') ? 'error' : ''}
//       />

//       <label>Quantity:</label>
//       <input 
//         type="number"
//         onChange={(e) => setQuantity(e.target.value)}
//         value={quantity}
//         className={emptyFields.includes('quantity') ? 'error' : ''}
//       />
//       <label>Image URL:</label>
//       <input 
//         type="URL"
//         onChange={(e) => setImage(e.target.value)}
//         value={image}
//         className={emptyFields.includes('image') ? 'error' : ''}
//       />

//       <button>Add Item</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   )
// }

