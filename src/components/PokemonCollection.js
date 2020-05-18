import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  renderPokemon = () => {
    const {pokemonList} = this.props 
    return pokemonList.map(pokemon => <PokemonCard key={pokemon.id} pokemonInfo={pokemon}/>)
  }
  


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemon()}
      </Card.Group>
    )
  } 
}

export default PokemonCollection
