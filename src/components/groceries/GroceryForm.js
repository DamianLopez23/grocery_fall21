import { Component } from 'react';

class GroceryForm extends Component {
  state = { item: '', complete: false }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addGrocery(this.state)
    this.setState({ item: '', complete: false })
  }
  render() {
    const { item } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="item"
          value={item}
          onChange={this.handleChange}
          required
          placeholder="Add item"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default GroceryForm;













