import Grocery from "./Grocery";

// import Grocery from './Grocery';
const GroceryList = ({ groceries, removeGrocery, updateGrocery }) => {
  return(
    <>
      {
        groceries.map( grocery =>
          <Grocery {...grocery} 
          removeGrocery={removeGrocery}
          updateGrocery={updateGrocery}
          />

        )
      }
    </>
    )
}
export default GroceryList;