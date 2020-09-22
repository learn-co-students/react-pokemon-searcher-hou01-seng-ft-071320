import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokeCards = () =>{
    return this.props.pokemons.map(pokemon => 
    < PokemonCard 
      key={pokemon.id} 
      pokemon={pokemon} 
      selectPokemon={this.props.selectPokemon}
      selectedPokemon={this.props.selectedPokemon}
    />)
  }
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokeCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
