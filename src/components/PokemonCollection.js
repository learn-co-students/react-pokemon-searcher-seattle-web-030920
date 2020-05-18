import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  makePokeCards=()=>{
    return this.props.pokes.map(thisPoke=> <PokemonCard key={thisPoke.id} poke={thisPoke}/>)
  }
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.makePokeCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
