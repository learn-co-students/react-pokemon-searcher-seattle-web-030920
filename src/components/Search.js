import React from 'react'

const Search = props => {

  const {searchPokemon} = props 

  let searchValue = ''

  const handleChange = (event)=>{
    
    searchValue = event.target.value 
     console.log(searchValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    searchPokemon(searchValue)
  }
  

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange}  />
        <button onClick={handleSubmit}><i className="search icon"  /></button>
      </div>
    </div>
  )
}

export default Search
