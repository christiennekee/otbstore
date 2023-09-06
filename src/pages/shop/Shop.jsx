import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import  { useEffect, useState }from 'react'

import { useAuthContext } from "../../hooks/useAuthContext";

//components
import LoadForm from "../../components/loadForm";
import ItemDetails from "../../components/ItemDetails";

const shop =() => {
  const {items, dispatch} = useState(null)
  const {user} = useAuthContext()
  

useEffect(() => {
  const fetchItems = async () => {
    const response = await fetch('/api/items', {
      headers: {'Authorization': `Bearer ${user.token}`},
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'SET_ITEMS', payload: json})
    }
  }

  if (user) {
    fetchItems()
  }
}, [dispatch, user])

return (
  <div className="shop">
    <div className="items">
      {items && items.map((item) => (
        <ItemDetails key={item._id} item={item} />
      ))}
    </div>
    <LoadForm />
  </div>
);
}
export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>OH the blood</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
