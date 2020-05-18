import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (e, {name, value}) => this.setState({[name]: value})

  handleSubmit = e => {
    e.preventDefault()
    const { name, hp, frontUrl, backUrl } = this.state
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name,
        stats: [
          {
            value: hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    })
    .then(res => res.json())
    .then(pokemon => this.props.addPokemon(pokemon))
    .catch(err => console.log(err.message))
    
    this.setState({name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''})
  }

  render() {
    const { name, hp, frontUrl, backUrl } = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={frontUrl} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
