import { useItemsContext } from '../hooks/useItemsContext' //redo both paths
import { useAuthContext } from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ItemDetails = ({ item }) => {
  const { dispatch } = useItemsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('/api/items/' + item._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_ITEM', payload: json})
    }
  }

  return (
    <div className="item-details">
      <h4>{item.title}</h4>
      <p><strong>Type (kg): </strong>{item.type}</p>
      <p><strong>Color: </strong>{item.color}</p>
      <p>{formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default ItemDetails