const SET_INITIALIZED_TRUE = `SET_INITIALIZED_TRUE`

export interface IState {
  initialized: boolean
}

const initialState: IState = {
  initialized: false
}

export const appReducer = (state = initialState, action: ISetInitTrueACType): IState => {
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

interface ISetInitTrueACType {
  type: typeof SET_INITIALIZED_TRUE
}

export const setInitTrueAC = (): ISetInitTrueACType => ({ type: SET_INITIALIZED_TRUE })
