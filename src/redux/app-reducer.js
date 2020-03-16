const SET_INITIALIZED_TRUE = `SET_INITIALIZED_TRUE`

const initialState = {
  initialized: false
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INITIALIZED_TRUE:
      return {
        ...state,
        initialized: true
      }

    default:
      return state
  }
}

export const setInitTrueAC = () => ({ type: SET_INITIALIZED_TRUE })
