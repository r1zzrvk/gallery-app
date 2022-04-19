import { all } from 'redux-saga/effects'
import { fetchItemWatcher } from './itemSaga';
import { fetchItemsWatcher } from './itemsSaga';

export function* rootWatcher() {
  yield all([fetchItemWatcher(),fetchItemsWatcher()])
}