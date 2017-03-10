import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment, decrement } from 'src/model'

const mapState = ({ counter }) => ({ counter })
const mapDispatch = dispatch => bindActionCreators({ increment, decrement }, dispatch)

export const Counter = ({ counter, increment, decrement }) => <div>
  <div>counter: {counter}</div>
  <button onClick={increment}>+</button>
  <button onClick={decrement}>-</button>
</div>

export default connect(mapState, mapDispatch)(Counter)
