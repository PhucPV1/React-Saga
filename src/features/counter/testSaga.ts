import { PayloadAction } from '@reduxjs/toolkit'
import { delay, put, takeEvery } from 'redux-saga/effects'
import { incrementSaga, incrementSagaSuccess } from './counterSlice'

// function* log(action: PayloadAction) {
//   console.log('akakak', action)
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('handleIncrementSaga', action)
  yield delay(2000)

  yield put(incrementSagaSuccess(action.payload))
}

export default function* testSaga() {
  console.log('testSaga')
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga)
}
