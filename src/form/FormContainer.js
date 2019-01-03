import React, { Component } from 'react';

const FormContainer = FormComponent => {
  return class Form extends Component {
    constructor(props) {
      super(props)
      this.state = {
        text: ''
      }
    }
    onTextChanged = (event) => {
      this.setState({ text: event.target.value })
    }

    onFormSubmit = (event) => {
      event.preventDefault()
      alert(this.state.text)
    }

    render() {
      return (
        <FormComponent onTextChanged={this.onTextChanged} onFormSubmit={this.onFormSubmit} text={this.state.text} />
      )
    }
  }
}
export default FormContainer;