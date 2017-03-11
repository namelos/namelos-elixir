import test from 'ava'
import { counter, counterActions } from 'src/model/counter'

test('counter should be 0 in the beginning', t => {
  const actual = counter(undefined, { type: 'any' })
  t.is(actual, 0)
})

test('counter should be 1 when increment from 0', t => {
  const actual = counter(0, counterActions.increment())
  t.is(actual, 1)
})

test('counter should be 0 when decrement from 1', t => {
  const actual = counter(1, counterActions.decrement())
  t.is(actual, 0)
})