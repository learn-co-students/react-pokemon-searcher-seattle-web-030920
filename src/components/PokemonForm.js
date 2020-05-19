import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
      backUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    }
  }

  handleNameChange = event => {
    console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  handleHPChange = event => {
    console.log(event.target.value)
    let parsedHP = parseInt(event.target.value, 10)
    parsedHP = !Number.isInteger(parsedHP) ? 0 : parsedHP
    this.setState({
      hp: parsedHP
    })
  }

  handleFrontURLChange = event => {
    console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  handleBackURLChange = event => {
    console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  buildPokemon()
  {
    
    return {          
    name: this.state.name,
    hp: this.state.hp,
    isClicked: false,
    height: 0,
    moves: [],
    types: [],
    stats: [{name: "hp", value: this.state.hp}],
    sprites: {
      front: this.state.frontUrl,
      back: this.state.backUrl
    }
    }
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => {this.props.onAddPokemon(this.buildPokemon())}}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleNameChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleHPChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleFrontURLChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleBackURLChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
