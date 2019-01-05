const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

export const add_todo = todo => {
  return {
    type: ADD_TODO,
    value: todo
  }
}

export const remove_todo = indexOfTodo => {
  return {
    type: REMOVE_TODO,
    value: indexOfTodo
  }
}