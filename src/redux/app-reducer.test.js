import appReducer, { setInitTrueAC } from './app-reducer'

const state = {
  initialized: false
}

it('should initialized be true', function() {
  // 1. Test data
  const action = setInitTrueAC()

  // 2. Action
  const newState = appReducer(state, action)

  // 3. Expectation
  expect(newState.initialized).toBe(true)
})
