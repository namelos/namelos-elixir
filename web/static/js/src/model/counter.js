import { createAction, createReducer } from 'src/lib'

export const COUNTER = {
  Increment: 'counter/INCREMENT',
  Decrement: 'counter/DECREMENT'
}

export const counterActions = {
  increment: createAction(COUNTER.Increment),
  decrement: createAction(COUNTER.Decrement)
}

export const counter = createReducer(0, {
  [COUNTER.Increment]: state => state + 1,
  [COUNTER.Decrement]: state => state - 1
})
