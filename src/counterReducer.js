const initialState = { value: 0 }

export default function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    } 
   }
    if(action.type === 'decrement' ){
        return {
            ...state,
            // and update the copy with the new value
            value: state.value - 1
        }
    }
    if(action.type === 'incrementByVal'){
        return {
            ...state,
            // and update the copy with the new value
            value: state.value+action.value
    }
  }
  // otherwise return the existing state unchanged
  return state
}


