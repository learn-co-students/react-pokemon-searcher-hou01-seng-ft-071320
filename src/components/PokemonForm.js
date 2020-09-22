import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.props.postPokedex}>
          <Form.Group widths="equal">
            <Form.Input onChange={(e)=>this.props.handleInputChange(e)} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={(e)=>this.props.handleInputChange(e)} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={(e)=>this.props.handleSpriteChange(e)} fluid label="Front Image URL" placeholder="url" name="front" />
            <Form.Input onChange={(e)=>this.props.handleSpriteChange(e)} fluid label="Back Image URL" placeholder="url" name="back" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
