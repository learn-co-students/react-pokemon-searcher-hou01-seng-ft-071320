import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    open: true
  }

  handletoggle = () => {
    this.setState(state => ({ open: !state.open}))
  }

  getImage = () =>  this.state.open ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.getImage()} onClick={this.handletoggle}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
