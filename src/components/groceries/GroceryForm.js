
import {useState, useEffect } from 'react';

const GroceryForm = ({ addGrocery, id, item, price, updateGrocery, setEditing }) => {
  const [grocery, setGrocery] = useState({ item: "", price: ""})

  useEffect( () => {
    if (id) {
      setGrocery({ item, price })
    }
  }, [])



const handleSubmit = (e) => {
  e.preventDefault();
  if (id) {
    updateGrocery=(id, grocery)
    setEditing(false)
  } else {
    addGrocery(grocery)
  }
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="item"
          value={grocery.item}
          placeholder="item name"
        onChange={(e) => setGrocery({...grocery, item: e.target.value})}
    />

  </form>
    <form onSubmit={handleSubmit}>
      <input
        name="item"
        value={grocery.price}
        placeholder="price"
        onChange={(e) => setGrocery({...grocery, price: e.target.value})}
    />
    <button type="submit">Submit</button>
  </form>
    </>
    )
  }
export default  GroceryForm;

