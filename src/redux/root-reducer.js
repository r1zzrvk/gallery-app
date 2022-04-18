import { FETCH_ITEMS, FETCH_ITEMS_FAILED, FETCH_ITEMS_SUCCESS } from "./constants"

const initialState = {
  items: [],
  isLoading: false,
  error: '',
  item: {},
  limit: 24,
  user: {
    avatar:'https://inlnk.ru/VoVjQ0',
    firstName: 'Станислав',
    email: 'example@gmail.com',
  }
}

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCH_ITEMS:
    return { 
      ...state,
      isLoading: true
    };
  case FETCH_ITEMS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      error: '',
      items: payload
    };
  case FETCH_ITEMS_FAILED:
    return {
      ...state,
      isLoading: false,
      error: payload
    }
  default:
    return state
  }
}
