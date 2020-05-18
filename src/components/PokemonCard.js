import React from 'react'
import { Card } from 'semantic-ui-react'

const PokemonCard = ({pokemon}) => {
  const [image, setImage] = React.useState(pokemon.sprites.front)
  const hp = pokemon.stats.find(stat => stat.name === 'hp').value
  return (
    <Card onClick={() => {
      if(image === pokemon.sprites.front){
        setImage(pokemon.sprites.back)
      } else {
        setImage(pokemon.sprites.front)
      }
    }}>
    <div>
      <div className="image">
        <img alt="oh no!" src={image} />
      </div>
      <div className="content">
      <div className="header">{pokemon.name}</div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat red" />
          {hp}
        </span>
      </div>
    </div>
  </Card>
  )
}

export default PokemonCard
