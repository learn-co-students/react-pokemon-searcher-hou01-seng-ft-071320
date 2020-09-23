import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  clickedPokemon = () => {
    this.setState(previousState => {
      return {
        clicked: !previousState.clicked
      }
    })
  }

  render() {
    let pokemon = this.props.pokemon

    let cardFront = (
          <Card onClick={(this.clickedPokemon)} >
          <div>
            <div className="image">
              <img src={pokemon.sprites.front}alt="oh no!" />
            </div>
            <div className="content">
              <div className="header">{pokemon.name}</div>
            </div>
            <div className="extra content">
              <span>
                <i className="icon heartbeat red" />
                {pokemon.hp + ' hp'}
              </span>
            </div>
          </div>
        </Card>
      )

      let cardBack = (
        <Card onClick={(this.clickedPokemon)} >
        <div>
          <div className="image">
            <img src={pokemon.sprites.back}alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp + ' hp'}
            </span>
          </div>
        </div>
      </Card>
    )

    return (
      !this.state.clicked? cardFront : cardBack
    )
  }
}

export default PokemonCard
