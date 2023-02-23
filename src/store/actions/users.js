import Api from "../../api/Api";

export const USERS_SET_LIST_ACTION = 'setList';
export const USERS_LOADING_ACTION = 'loading';

export function getUsers () {
  return (dispatch) => {
    dispatch(isLoading());

    Api
      .getList('users')
      .then(list => {
        dispatch(setUsers(list))}
      )
  }
}

export function setUsers (list) {
  return { type: USERS_SET_LIST_ACTION, payload: list }
}

export function isLoading () {
  return { type: USERS_LOADING_ACTION, payload: true }
}