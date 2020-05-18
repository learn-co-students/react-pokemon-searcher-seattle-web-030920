import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    toggle:false
  }
  handleClick=()=>{
    this.setState(prev=> ({toggle: !prev.toggle}))
  }
  getHP(){
    return this.props.poke.stats.find(obj=> obj.name==="hp").value
  }

  render() {
    const {name}=this.props.poke
    const {toggle}=this.state
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img alt="oh no!" src={toggle? this.props.poke.sprites.back:this.props.poke.sprites.front}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHP()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
