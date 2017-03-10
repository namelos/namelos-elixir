import { createAction } from 'src/lib'

export const COUNTER = {
  Increment: 'counter/INCREMENT',
  Decrement: 'counter/DECREMENT'
}

export const counter = (state = 0, action) => {
  switch(action.type) {
    case COUNTER.Increment: return state + 1
    case COUNTER.Decrement: return state - 1
    default:                return state
  }
}

export const counterActions = {
  increment: createAction(COUNTER.Increment),
  decrement: createAction(COUNTER.Decrement)
}
