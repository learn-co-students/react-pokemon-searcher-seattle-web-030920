import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const URL = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchPokemon: [],
    search: ""
  }

  fetchPokemon = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(allPokemon => {
      this.setState({
        pokemon: allPokemon,
        searchPokemon: allPokemon
      })
    })
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  handleSearchChange = event => {
    const newSearch = event.target.value
    this.setState(prev => {
      return {
        search: newSearch,
        searchPokemon: prev.pokemon.filter(poke => {
          return poke.name.includes(newSearch)
        })
      }
    })
  }

  handleSearchSubmit = () => {
    this.setState({search: ""})
  }

  addPokemon = pokemon => {
    this.setState(prev => {
      return {
        pokemon: [...prev.pokemon, pokemon]
      }
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search onSearchChange={this.handleSearchChange} onSearchSubmit={this.handleSearchSubmit} />
        <br />
        <PokemonCollection allPokemon={this.state.searchPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
