import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <div>
        <form>
          <input type="text" name="firstName" onChange={this.props.handleNameChange} value={this.props.formData.firstName} />
          <input type="text" name="lastName" onChange={this.props.handleNameChange} value={this.props.formData.lastName} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Form;
