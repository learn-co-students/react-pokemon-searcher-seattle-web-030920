import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <label>SEARCH BY NAME:</label>
        <input name="searchName" className="prompt" onChange={(event) => props.onChange(event)} />
        <label>SEARCH BY HP HIGHER THAN:</label>
        <input type= "number" name="searchHP" className="prompt" onChange={(event) => props.onChange(event)} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
