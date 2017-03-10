import React from 'react'
import { connect } from 'react-redux'
import { counterActions } from 'src/model/counter'

const mapState = ({ counter }) => ({ counter })

export const Counter = ({ counter, dispatch }) => <div>
  <div>counter: {counter}</div>
  <button onClick={() => dispatch(counterActions.increment())}>+</button>
  <button onClick={() => dispatch(counterActions.decrement())}>-</button>
</div>

export default connect(mapState)(Counter)
