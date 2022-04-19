import { delay, put, takeEvery, call} from "redux-saga/effects";
import { rootAPI } from "../../api/root-api";
import { fetchItemFailedAction, fetchItemsAction, fetchItemSuccessAction } from "../actions";
import { ASYNC_FETCH_ITEM } from "../constants";

function* fetchItemWorker({payload}) {
    yield put(fetchItemsAction());
    yield delay(500);
    try {
      const data = yield call(rootAPI.fetchItem, payload);
      yield put(fetchItemSuccessAction(data))
    } catch (e) {
      yield put(fetchItemFailedAction(e.message))
    }
};

 export function* fetchItemWatcher() {
    yield takeEvery(ASYNC_FETCH_ITEM, fetchItemWorker)
}
