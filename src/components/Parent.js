import React, {Component} from 'react'
import Form from './Form'
import DisplayData from './displaydata'

class ParentComponent extends Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleNameChange = event => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log([event.target.name]))
  }

  render() {
    return ([
      <Form
        formData={this.state}
        handleNameChange={this.handleNameChange}
      />,
      <DisplayData formData={this.state} />
    ])
  }
}

export default ParentComponent
