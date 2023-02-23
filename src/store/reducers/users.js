import {
  USERS_SET_LIST_ACTION,
  USERS_LOADING_ACTION,
} from "../actions/users";

const initialState = {
  list: [],
  loading: false,
}

function usersReducer (state = initialState, { type, payload }) {
  switch (type) {
    case USERS_SET_LIST_ACTION: return { ...state, list: payload, loading: false }
    case USERS_LOADING_ACTION: return { ...state, loading: payload }
    default: return state
  }
}

export default usersReducer;
