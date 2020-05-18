import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       pokes:[],
       searchName:"",
       searchHP:""
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/pokemon').then(res=> res.json()).then(res=> this.setState({pokes:res}))
  }
  handleChange=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }
  pokeList(){
    const {pokes, searchName, searchHP}=this.state
    const namePokes= searchName? pokes.filter(poke=> poke.name.includes(searchName)): pokes

    if (searchHP){
      return namePokes.filter(poke=>
        poke.stats.find(obj=> obj.name==="hp").value>= parseInt(searchHP, 10)
        )
    }
    else {
      return namePokes
    }
  }

  addPokemon = pokemon => {
    const { name, hp, frontUrl, backUrl } = pokemon
    const data= {name: name,
      stats: [{value: hp, name: 'hp'}],
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    }
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(pokemon => this.setState({ pokes: [...this.state.pokes, pokemon]}))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.handleChange}/>
        <br />
        <PokemonCollection pokes={this.pokeList()}/>
      </Container>
    )
  }
}

export default PokemonPage
