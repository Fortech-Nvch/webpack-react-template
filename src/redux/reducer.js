const initialState = {
  counter: 0,
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'inc':
      return { counter: state.counter + 1 }
    case 'dec':
      return { counter: state.counter - 1 }
    default:
      return state
  }
}
