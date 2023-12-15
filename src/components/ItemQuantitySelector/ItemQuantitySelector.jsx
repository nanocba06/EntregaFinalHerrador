import React from 'react'
import { Button } from 'react-bootstrap'
import { AddItemButton } from "../AddItemButton/AddItemButton";

export const ItemQuantitySelector = () => {

const [quantity, setQuantity] = React.useState(1)

const handleAddProduct = () => {
  setQuantity(quantity + 1)
}

const handleRemoveProduct = () => {
  if(quantity > 1){
    setQuantity(quantity - 1)
  }
}

const handleResetQuantity = () => {
  setQuantity(1)
}

  return (
    <div  style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    }}>
        <Button className='btn btn-danger' onClick={handleRemoveProduct}>-</Button>
        <input type="number" value={quantity} disabled />
        <Button className='btn btn-danger' onClick={handleAddProduct}>+</Button>
        <div style={{ margin: "10px"}} ><AddItemButton quantity={quantity} handleResetQuantity={handleResetQuantity} /></div>    
    </div>
  )
}