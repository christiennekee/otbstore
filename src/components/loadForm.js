import { useState } from "react"
import { useItemsContext } from "../hooks/useItemsContext";
//import { useAuthContext } from "../hooks/useAuthContext";


const LoadForm = () => {
  const { dispatch } = useItemsContext()
  //const { user } = useAuthContext()

  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [color, setColor] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const item = {title, type, color}

    const response = await fetch('/api/items', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setTitle('')
      setType('')
      setColor('')
      setError(null)
      setEmptyFields([])
      dispatch({type: 'ADD_PRODUCT', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Item</h3>

      <label>Title:</label>
      <input 
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Type:</label>
      <input 
        type="text"
        onChange={(e) => setType(e.target.value)}
        value={type}
        className={emptyFields.includes('type') ? 'error' : ''}
      />

      <label>Color:</label>
      <input 
        type="text"
        onChange={(e) => setColor(e.target.value)}
        value={color}
        className={emptyFields.includes('color') ? 'error' : ''}
      />

      <button>Add Item</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}


export default LoadForm