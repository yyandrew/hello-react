import React from 'react';
import PropTypes from 'prop-types';
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
      <textarea onChange={event => props.textAction(event.target.value)} defaultValue={props.text} />
    </div>
    <div>
      <input type='submit' value='Submit' />
    </div>
  </form>
)

FormComponent.propTypes = {
  text: PropTypes.string,
  textAction: PropTypes.func,
  submitAction: PropTypes.func,
}

const mapStateToProps = state => state.form
const mapDispatchToProps = { textAction, submitAction }

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);