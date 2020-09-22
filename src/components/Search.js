import React from 'react'




class Search extends React.Component {


  handleKeyboardInput = (e) => {
    if(e.key === "Enter"){
      this.props.searchPokemon(e.target.value)
    }
  }

  render(){
  return (
    <div className="ui search">
      <div className="ui icon input" onKeyDown={ this.handleKeyboardInput}>
        <input className="prompt"/>
        <i className="search icon"  />
      </div>
    </div>
  )}
}

export default Search
