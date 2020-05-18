import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: false
  }

  turnCard = () => {
    this.setState(prev => ({flipped: !prev.flipped}))
  }
  

  render() {
    const {flipped} = this.state
    const {pokemonInfo} = this.props
    const {name, sprites, types, stats} = pokemonInfo
    const {hp} = stats
    return (
      <Card>
        <div>
          <div className="image">
            {flipped ? <img src={sprites.back} alt="oh no!" onClick={this.turnCard}/> : <img src={sprites.front} alt="oh no!" onClick={this.turnCard}/>}
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content"> 
            <span>
              <i className="icon heartbeat red" />
              {stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
