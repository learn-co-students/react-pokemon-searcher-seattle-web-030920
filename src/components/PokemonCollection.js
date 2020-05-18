import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  renderPokemon = () => {
    const { allPokemon } = this.props
    return allPokemon.map(pokemon => {
      const pokeInfo = {
        name: pokemon.name,
        hp: pokemon.stats[pokemon.stats.length - 1].value,
        frontURL: pokemon.sprites.front,
        backURL: pokemon.sprites.back
      }
      return <PokemonCard key={pokemon.id} pokeInfo={pokeInfo} />
    })
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
