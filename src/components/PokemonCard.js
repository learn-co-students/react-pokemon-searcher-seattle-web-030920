import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    const { pokemon, toggleImage } = this.props
    const { isClicked, sprites } = pokemon
    const url = isClicked ? sprites.back : sprites.front
    return (
      <Card>
        <div onClick={() => {toggleImage(pokemon)}}>
          <div className="image">
            <img src={url} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              
              {pokemon.stats.find(stat => stat.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
