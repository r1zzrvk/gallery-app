import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from "./sagas";

let reducers = combineReducers({
  root: rootReducer,
});
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher)