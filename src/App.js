import { useState } from 'react';
import GroceryList from './components/groceries/GroceryList';
import GroceryForm from './components/groceries/GroceryForm';
const App = ({}) => {

  
  const [groceries, setGroceries] = useState([

    { id: 1, item: "Paper Towels", price: "$16.00",complete: true },
    { id: 2, item: "Toilet Paper", price: "$20.00",complete: false },
    { id: 3, item: "Apples", price: "$1.00",complete: false },

])
const getId  = () => {

  return Math.floor((1 + Math.random()) * 10000)
  .toString(16)
  .substring(1);
};

const addGrocery = (incomingGrocery) => {
  let newGrocery = {id: getId(), ...incomingGrocery }

  setGroceries([...groceries, newGrocery])
}

  const removeGrocery = (id) =>{
    setGroceries (groceries.filter(g => g.id !== id))
  }

  const updatedGrocery = (id, incomingGrocery) => {
    updatedGrocery = groceries.map (g => {
      if (g.id == id) {
        return incomingGrocery
      }import { useState } from 'react';
import GroceryList from './components/groceries/GroceryList';
import GroceryForm from './components/groceries/GroceryForm';
const App = ({}) => {

  
  const [groceries, setGroceries] = useState([

    { id: 1, item: "Paper Towels", price: "$16.00",complete: true },
    { id: 2, item: "Toilet Paper", price: "$20.00",complete: false },
    { id: 3, item: "Apples", price: "$1.00",complete: false },

])
const getId  = () => {

  return Math.floor((1 + Math.random()) * 10000)
  .toString(16)
  .substring(1);
};

const addGrocery = (incomingGrocery) => {
  let newGrocery = {id: getId(), ...incomingGrocery }

  setGroceries([...groceries, newGrocery])
}

  const removeGrocery = (id) =>{
    setGroceries (groceries.filter(g => g.id !== id))
  }

  const updatedGrocery = (id, incomingGrocery) => {
    updatedGrocery = groceries.map (g => {
      if (g.id == id) {
        return incomingGrocery
      }
      return g 
    })
    setGroceries(updatedGrocery)
  } 

    return (
      <>
        <GroceryForm addGrocery={addGrocery}/>
        <GroceryList groceries={groceries} 
        removeGrocery={removeGrocery} 
        updatedGrocery={updatedGrocery}
        />
      </>
    )
  }


export default App;

      return g 
    })
    setGroceries(updatedGrocery)
  } 

    return (
      <>
        <GroceryForm addGrocery={addGrocery}/>
        <GroceryList groceries={groceries} 
        removeGrocery={removeGrocery} 
        updatedGrocery={updatedGrocery}
        />
      </>
    )
  }


export default App;
