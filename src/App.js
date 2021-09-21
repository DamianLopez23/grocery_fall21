import { Component } from 'react';
import GroceryList from './components/groceries/GroceryList';
class App extends Component {
  state = {
    groceries: [
      { id: 1, item: "Paper Towels", complete: true },
      { id: 2, item: "Toilet Paper", complete: false },
      { id: 3, item: "Apples", complete: false },
    ]
  }
  render () {
    const { groceries } = this.state
    // const todos = this.state.todos
    return (
      <>
        <GroceryList groceries={groceries}/>
      </>
    )
  }
}
export default App;
