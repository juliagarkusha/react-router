import {
  PHOTOS_LOADING_ACTION,
  PHOTOS_SET_LIST_ACTION,
} from "../actions/photos";

const initialState = {
  list: [],
  loading: false,
}

function photosReducer (state = initialState, { type, payload }) {
  switch (type) {
    case PHOTOS_SET_LIST_ACTION: return { ...state, list: payload, loading: false }
    case PHOTOS_LOADING_ACTION: return { ...state, loading: payload }
    default: return state
  }
}

export default photosReducer;
