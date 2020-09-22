import React from 'react'

class Search extends React.Component {

  handleKeyPress = (e) => {
    if(e.key === "Enter") {
      this.props.searchPokemon(e.target.value)
    }
  }

  render () {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input onKeyPress={this.handleKeyPress} className="prompt"/>
          <i className="search icon" />
        </div>
      </div>
    )
    }
}

export default Search
