import {
  ASYNC_FETCH_ITEMS,
  FETCH_ITEMS,
  FETCH_ITEMS_FAILED,
  FETCH_ITEMS_SUCCESS
} from "./constants";

export const fetchItemsAction = (payload) => ({
  type: FETCH_ITEMS,
  payload
});

export const fetchItemsSuccessAction = (payload) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload
});

export const fetchItemsFailedAction = (payload) => ({
  type: FETCH_ITEMS_FAILED,
  payload
});

export const asyncFetchItemsAction = (payload) => ({
  type: ASYNC_FETCH_ITEMS,
  payload
})




