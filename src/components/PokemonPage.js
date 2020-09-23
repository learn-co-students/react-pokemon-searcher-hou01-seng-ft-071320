import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: '',
    foundPokemons: [],
    name: '',
    hp: 0,
    frontUrl: '',
    backUrl: ''
  }

  componentDidMount = () => {
    this.getPokemons()
  };

  getPokemons = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => this.setPokemon(pokemons))
  }

  setPokemon = (allPokemons) => {
    this.setState({
      pokemons: allPokemons
    })
  }

  searchPokemon = (e) => {
    this.setState({
      searchTerm: e.target.value
    }, this.filterPokemon)
  }

  filterPokemon = () => {
    if (this.state.searchTerm !== '') {
      let currentPokemon = this.state.pokemons.filter(pokemon => {
        return pokemon.name.includes(this.state.searchTerm)
      })
  
      this.setState({ foundPokemons: currentPokemon })
    } else {
      this.setState({ foundPokemons: '' })
    }
  }

  formHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  pokemonBuilder = () => {
    let newPoke = {}
    newPoke.name = this.state.name
    newPoke.hp = this.state.hp
    newPoke.sprites = {
      front: this.state.frontUrl, 
      back: this.state.backUrl
    }
    return newPoke
  }

  postPokemon = (e) => {
    e.target.reset()
    
    let newPokemon = this.pokemonBuilder()

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then(pokemon => this.addNewPokemon(pokemon))
  }

  addNewPokemon = (newPokemon) => {
    this.setState({ 
      pokemons: [...this.state.pokemons, newPokemon]
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm formHandler={this.formHandler} postPokemon={this.postPokemon}/>
        <br />
        <Search searchPokemon={this.searchPokemon}/>
        <br />
        {this.state.foundPokemons.length === 0 ? <PokemonCollection pokemons={this.state.pokemons} /> : <PokemonCollection pokemons={this.state.foundPokemons} />}
      </Container>
    )
  }
}

export default PokemonPage
