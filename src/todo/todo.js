import React from 'react';
import { connect } from 'react-redux';

import { add_todo, remove_todo } from './actions';

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Todo Application - Redux</h2>
        <input
          type='text'
          name='todo'
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.dispatch(add_todo(this.state.userInput))}>Add</button>
        <ul>
          {this.props.todos &&
            this.props.todos.map(todo => {
              return (
                <li
                  onClick={() => {
                    let todoIndex = this.props.todos.findIndex(k => k === todo)
                    return this.props.dispatch(remove_todo(todoIndex))
                  }}
                >{todo}</li>
              )
            })}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, null)(Todo);