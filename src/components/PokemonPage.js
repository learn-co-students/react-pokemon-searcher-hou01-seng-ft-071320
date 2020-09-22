import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    selectedPokemon: '',
    searchedPokemons: [],
    search: '',
    newPokemon: {
      name: '',
      hp: '',
      sprites: {
        front: '',
        back: ''
      }
    }
  }

  componentDidMount(){
    this.fetchPokedex()
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
          postPokedex={this.postPokedex}
          handleInputChange={this.handleInputChange}
          handleSpriteChange={this.handleSpriteChange}
        />
        <br />
        <Search searchPokemon={this.searchPokemon}/>
        <br />
        <PokemonCollection 
          pokemons={this.state.searchedPokemons} 
          selectedPokemon={this.state.selectedPokemon} 
          selectPokemon={this.selectPokemon}
        />
      </Container>
    )
  }

  fetchPokedex = ()=>{
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons =>{
      this.setState({
        pokemons: pokemons,
        searchedPokemons: pokemons
      })
    })
  }

  postPokedex = ()=>{
    if (!this.state.pokemons.find(pokemon => pokemon.name === this.state.newPokemon.name)){
      let oldPokemon = this.state.pokemons
      fetch('http://localhost:3000/pokemon',{
        method: 'POST',
        body: JSON.stringify(this.state.newPokemon),
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(res=>res.json())
      .then(newPokemon=>{
        oldPokemon.push(newPokemon)
        this.setState({
          pokemons: oldPokemon
        })
      })
    }else{      
      alert('Pokemon already exist')
    }
  }

  selectPokemon = (pokemon)=>{
    let setPokemon = ''
    if (pokemon !== this.state.selectedPokemon){setPokemon = pokemon}
    this.setState({selectedPokemon: setPokemon})
  }

  searchPokemon = (searchWord)=>{
    this.setState({
      search: searchWord,
      searchedPokemons: [...this.state.pokemons].filter(pokemon => pokemon.name.includes(searchWord))
    })
  }

  handleInputChange = (change)=>{
    this.setState({
      newPokemon: {
        ...this.state.newPokemon,
        [change.currentTarget.name]: change.currentTarget.value
      }
    })
  }

  handleSpriteChange = (change)=>{
    this.setState({
      newPokemon:{
        ...this.state.newPokemon,
        sprites:{
          ...this.state.newPokemon.sprites,
          [change.currentTarget.name]: change.currentTarget.value
        }
      }
    })
  }
  
}
export default PokemonPage
