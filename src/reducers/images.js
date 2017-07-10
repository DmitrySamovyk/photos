const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_IMAGES':
      return newState = action.data;
    case 'TOGGLE_FAVOURITE':
      let isFavourite= {
        isFavourite: !state[action.index].isFavourite
      }
      return stateAsign(state, isFavourite, action)
    default:
      return state
  }
}

function stateAsign(state, obj, action) {
  return [
    ...state.slice(0, action.index),
    Object.assign({}, state[action.index], obj),
    ...state.slice(action.index + 1)
  ];
}