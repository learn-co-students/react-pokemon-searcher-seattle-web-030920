import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemonList: [],
    displayed: [],
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  fetchPokemon = () => {
    fetch(`http://localhost:3000/pokemon`)
    .then(res => res.json())
    .then(pokeList => {
      this.setState({pokemonList: pokeList, displayed: pokeList})
    })
  }

  searchPokemon = (searchItem) => {
    const {pokemonList} = this.state
    searchItem === "" ? this.setState({displayed: pokemonList}) :
    this.setState({displayed: pokemonList.filter(pokemon => pokemon.name.includes(searchItem) || pokemon.types.includes(searchItem))})
  }
  // 
  
  addPokemon = (newPokemon) => {

    console.log(newPokemon)
    fetch(`http://localhost:3000/pokemon`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then(pokemon => {
      this.setState(prev => ({pokemonList: [...prev.pokemonList, pokemon]}))
    })
  }
  

  

  render() {
    const {pokemonList, displayed} = this.state 
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br /> 
        <Search searchPokemon={this.searchPokemon}/>
        <br />
        <PokemonCollection pokemonList={displayed} />
      </Container>
    )
  }
}

export default PokemonPage
