const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let newState = [...state, action.value]
      return newState
    case 'REMOVE_TODO':
      return [
        ...state.slice(0, action.value),
        ...state.slice(action.value + 1, state.length - 1)
      ]
    default:
      return state
  }
}

export default todoReducer