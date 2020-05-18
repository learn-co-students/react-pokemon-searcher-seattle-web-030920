import React from 'react'
import { Form } from 'semantic-ui-react'

const initialState={
  name: '',
  hp: '',
  frontUrl: '',
  backUrl: ''
}

class PokemonForm extends React.Component {
  constructor() {
    super()
    this.state = initialState
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.addPokemon(this.state)
    this.setState(initialState)
  }
  handleChange=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleChange} value= {this.state.name} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={this.handleChange} value= {this.state.hp} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input  onChange={this.handleChange} value= {this.state.frontUrl} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input  onChange={this.handleChange} value= {this.state.backUrl} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
