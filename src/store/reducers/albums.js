import {
  ALBUMS_LOADING_ACTION,
  ALBUMS_SET_LIST_ACTION,
} from "../actions/albums";

const initialState = {
  list: [],
  loading: false,
}

function albumsReducer (state = initialState, { type, payload }) {
  switch (type) {
    case ALBUMS_SET_LIST_ACTION: return { ...state, list: payload, loading: false }
    case ALBUMS_LOADING_ACTION: return { ...state, loading: payload }
    default: return state
  }
}

export default albumsReducer;
