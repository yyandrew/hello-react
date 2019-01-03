import React from 'react';

import { connect } from 'react-redux';

import { textAction, submitAction } from './actions';

const FormComponent = props => (
  <form onSubmit={(event) => {
    event.preventDefault()
    props.submitAction()
    alert(props.text)
  }}>
    <h1>Our form example</h1>
    <div>
      <textarea onChange={event => props.textAction(event.target.value)}>
        {props.text}
      </textarea>
    </div>
    <div>
      <input type='submit' value='Submit' />
    </div>
  </form>
)

const mapStateToProps = state => state.form
const mapDispatchToProps = { textAction, submitAction }

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);