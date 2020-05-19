import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: "" 
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(json => {this.initialization(json)})
    
  }

  initialization(json)
  {
    this.setState({
      pokemons: json
    }, () => {this.setUnclicks()})    
  }

  setUnclicks(){
    //this.state.pokemons.map(pkmn => pkmn.isClicked = false) 
    let unclickPokemons = this.state.pokemons.map(pkmn => {
      pkmn.isClicked = false
      return pkmn 
    })    
    this.setState({
      pokemons: unclickPokemons
    })
  }

  addPokemon = (pokemon) => {
    debugger
    pokemon.id = this.state.pokemons[this.state.pokemons.length-1].id + 1
    const pokemonsTemp = [...this.state.pokemons, pokemon]
    this.setState({
      pokemons: pokemonsTemp
    })
  }

  toggleImage = (pokemon) => {
    let foundIndex = this.state.pokemons.findIndex(currPokemon => currPokemon.id === pokemon.id)
    if( foundIndex != -1)
    {
      let updatedPokemon = this.state.pokemons[foundIndex]
      updatedPokemon.isClicked = !(updatedPokemon.isClicked)      
      let updatedPokemons = [...this.state.pokemons]      
      updatedPokemons.splice(foundIndex, 1, updatedPokemon)
      this.setState({
        pokmeons: updatedPokemons
      })
    }
  }

  handleSearch = (event) =>{
    console.log(event.target.value)

  }

  handleKeyPress = (event) => {
    console.log(event.currentTarget.value)
    if(event.key === "Enter")
    {
      this.setState({
        searchTerm: event.currentTarget.value
      })
    }
    
  }

  filterPokemons()
  {
    return (this.state.searchTerm === "" ? this.state.pokemons : this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchTerm)))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onAddPokemon={this.addPokemon}/>
        <br />
        <Search onSearch={this.handleSearch} onKeyHandle={this.handleKeyPress}/>
        <br />
        <PokemonCollection pokemons={this.filterPokemons()} toggleImage={this.toggleImage}/>
      </Container>
    )
  }
}

export default PokemonPage
