import { all } from 'redux-saga/effects'
import testSaga from '../features/counter/testSaga'

export default function* rootSaga() {
  console.log('rootSaga')
  yield all([testSaga()])
}
