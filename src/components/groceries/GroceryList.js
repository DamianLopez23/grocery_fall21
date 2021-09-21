const GroceryList = ({ groceries }) => {
  return(
    <>
      {
        groceries.map( grocery=>
          <p>
            {grocery.title}
          </p>
        )
      }
    </>
    )
}
export default GroceryList;