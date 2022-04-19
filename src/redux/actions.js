import {
  ASYNC_FETCH_ITEMS,
  FETCH_ITEMS,
  FETCH_ITEMS_FAILED,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEM_FAILED,
  FETCH_ITEM_SUCCESS,
  ASYNC_FETCH_ITEM
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
});

export const fetchItemSuccessAction = (payload) => ({
  type: FETCH_ITEM_SUCCESS,
  payload
});

export const fetchItemFailedAction = (payload) => ({
  type: FETCH_ITEM_FAILED,
  payload
});

export const asyncFetchItemAction = (payload) => ({
  type: ASYNC_FETCH_ITEM,
  payload
})







