import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    cardFront: true
  }

  toggleImage = () =>{
    let thisIsFront = this.state.cardFront
    this.setState({
      cardFront: !thisIsFront
    })
  }

  renderImg = () =>{
    if(this.state.cardFront) {
      return <img src={this.props.pokemon.sprites.front} alt="front" />
    }else{
      return <img src={this.props.pokemon.sprites.back} alt="back" />
    }
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.toggleImage}>
            {this.renderImg()}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {`${this.props.pokemon.hp}`}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
