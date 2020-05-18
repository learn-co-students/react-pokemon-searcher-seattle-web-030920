import React from 'react'
import { Form } from 'semantic-ui-react'

const DEFAULT_STATE = {
  name: '',
  sprites: {  
    front: '',
    back: ''},
  stats: [
    {
      "value": 100,
      "name": "speed"
    },
    {
      "value": 100,
      "name": "special-defense"
    },
    {
      "value": 100,
      "name": "special-attack"
    },
    {
      "value": 100,
      "name": "defense"
    },
    {
      "value": 100,
      "name": "attack"
    },
    {
      "value": "",
      "name": "hp"
    }
  ],
  types: ''
}
class PokemonForm extends React.Component {



  constructor() {
    super()

    this.state = DEFAULT_STATE
  }
 
  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleHpChange = (event) => {
    let value = event.target.value

    this.setState(prev => ({stats: [...prev.stats.slice(0,5), {"value": parseInt(value), "name": "hp"}]}))
  }
  
  handleFrontImgChange = (event) => {
    let value = event.target.value
    this.setState(prev => ({sprites: {...prev.sprites, front: value}}))
    // this.setState({frontUrl: event.target.value})
  }

  handleBackImgChange = (event) => {
    let value = event.target.value
    this.setState(prev => ({sprites: {...prev.sprites, back: value}}))
  }

  handleTypeChange = (event) => {
      let value = event.target.value 
      this.setState({types: value})
  }
  

  handleSubmit = () => {
    const {addPokemon} = this.props 
    addPokemon(this.state)
    this.setState(DEFAULT_STATE)
  }
  
  
  
   



  render() {
    const {name, sprites, stats, types} = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={this.handleNameChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={stats[5].value} onChange={this.handleHpChange}/>
            <Form.Input fluid label="types" placeholder="type" name="type" value={types} onChange={this.handleTypeChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={sprites.front} onChange={this.handleFrontImgChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={sprites.back} onChange={this.handleBackImgChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
