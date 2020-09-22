import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state ={ 
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
      }
    
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    //console.log(e.target.name.value)
    this.setState({
        name: e.target.name.value,
        hp: e.target.hp.value,
        sprites: {
          front: e.target.frontUrl.value,
          back: e.target.backUrl.value
        }
      },
      () =>{this.submitNewPokemon()
    })  
  }

  submitNewPokemon = () => {
    //console.log(this.state)
    this.props.newPokemonIn(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" required/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" required/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" required/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" required/>
          </Form.Group>
          <Form.Button >Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
