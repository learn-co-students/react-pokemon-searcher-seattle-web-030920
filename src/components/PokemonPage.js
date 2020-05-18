import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor() {
    super()
    
    this.state = {
      pokemons: [],
      search: ''
    }
  }
// use this to call api
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(json => this.setState({pokemons: json}))
    .catch(err => console.log(err.message))
  }

  handleSearch = event => {
    this.setState({search: event.target.value})
  }

  addPokemon = pokemon => {
    this.setState({ pokemons: [...this.state.pokemons, pokemon]})
  }

  render() {
    const pokemonSelected = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokemons={pokemonSelected} />
      </Container>
    )
  }
}

export default PokemonPage
