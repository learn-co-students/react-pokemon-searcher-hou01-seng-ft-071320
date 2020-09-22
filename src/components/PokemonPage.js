import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemons => 
      this.setState({ pokemons }))
  }

  createNewPokemon = (pokemon) => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokemon)
    })
    .then(resp => resp.json())
    .then(pokemonObj => this.setState({
      pokemons: [...this.state.pokemons, pokemonObj]
    }))
  }

  searchPokemon = (searchPokemon) => {
    let newArray = this.state.pokemons.filter(pokemon => {
      return searchPokemon === pokemon.name.slice(0,searchPokemon.length)
    })
    this.setState({
      pokemons: newArray
    })
  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createNewPokemon={this.createNewPokemon}/>
        <br />
        <Search searchPokemon={this.searchPokemon}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
