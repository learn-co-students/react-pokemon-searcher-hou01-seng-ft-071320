import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e)=>props.searchPokemon(e.currentTarget.value.toLowerCase())} className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
