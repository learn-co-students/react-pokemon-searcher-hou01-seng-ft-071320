import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state ={
    pokemons: [],
    displayedPokemons: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res =>res.json())
    .then(pokemons =>{
      this.setState({
        pokemons: pokemons,
        displayedPokemons: pokemons
      })  
    })
  }

  
  newPokemonIn = (newPokemon) =>{
    //console.log(newPokemon)
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {"Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(res =>res.json())
    .then(pokemon =>{
      //console.log(pokemon)
      this.updatePokemonList(pokemon)
    })
  }

  updatePokemonList = (newPokemon) => {
    let pokemonArray = this.state.pokemons
    pokemonArray.push(newPokemon)
    this.setState({
      pokemons: pokemonArray,
      displayedPokemons: pokemonArray
    })
  }

  searchPokemon= (searchInput) =>{
    let searchResults = this.state.pokemons.filter(pokemon =>{
      return searchInput === pokemon.name.slice(0,searchInput.length)
    })
    this.setState({
      ...this.state,
      displayedPokemons: searchResults
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemonIn={this.newPokemonIn}/>
        <br />
        <Search searchPokemon={this.searchPokemon}/>
        <br />
        <PokemonCollection pokemons={this.state.displayedPokemons} />
      </Container>
    )
  }
}

export default PokemonPage
