import { call, put, takeEvery, } from 'redux-saga/effects'
import { rootAPI } from '../../api/root-api';
import { fetchItemsAction, fetchItemsSuccessAction, fetchItemsFailedAction, asyncFetchItemsAction} from '../actions';
import { ASYNC_FETCH_ITEMS } from '../constants';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* fetchItemsWorker() { 
    yield put(fetchItemsAction());
    yield delay(1000)
  try {
    const data = yield call(rootAPI.fetchItems);
    yield put(fetchItemsSuccessAction(data))
  } catch (e) {
    yield put(fetchItemsFailedAction(e.message))
  }
};

export function* fetchItemsWatcher() {
  yield takeEvery(ASYNC_FETCH_ITEMS, fetchItemsWorker)
}
