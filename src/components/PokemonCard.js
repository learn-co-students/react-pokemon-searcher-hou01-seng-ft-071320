import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  side = ()=> {return this.props.selectedPokemon === this.props.pokemon.name ? 'back' : 'front'}

  render() {
    
    const {name,hp,sprites} = this.props.pokemon
    return (
      <Card onClick={()=>this.props.selectPokemon(name)}>
        <div>
          <div className="image">
            <img src={sprites[this.side()]} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
