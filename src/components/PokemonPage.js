import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state ={
    allPokemon: [],
    pokemons: []
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemons => this.setState({
      allPokemon: pokemons,
      pokemons: pokemons
    }))
  }

  handleChange = (e) => {
    this.setState({
      pokemons: this.state.allPokemon.filter(p => p.name.includes(e.target.value) )
    })
  }
  
  addPokemon = (e) =>{
    const newPokemon = {
      name: e.target.name.value,
      hp: e.target.hp.value,
      sprites: {
        front: e.target.frontUrl.value,
        back: e.target.backUrl.value
      }
    }
    
    console.log(newPokemon)

    fetch('http://localhost:3000/pokemon', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then(newPoke => this.setState({
      allPokemon: 
      [...this.state.allPokemon, newPoke],
      pokemons: 
      [...this.state.pokemons, newPoke]
    }))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search handleChange={this.handleChange}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
