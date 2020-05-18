import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    toggle: true
  }

  toggleImage = () => this.setState({toggle: !this.state.toggle})

  render() {
    const { name, hp, frontURL, backURL } = this.props.pokeInfo
    return (
      <Card>
        <div>
          <div className="image">
            <img alt={name} src={this.state.toggle ? frontURL : backURL} onClick={this.toggleImage} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
