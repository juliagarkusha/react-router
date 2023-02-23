import Api from "../../api/Api";

export const ALBUMS_SET_LIST_ACTION = 'setAlbums';
export const ALBUMS_LOADING_ACTION = 'loading';

export function getList () {
  return (dispatch) => {
    dispatch(isLoading());

    Api
      .getList('albums')
      .then(list => {
        dispatch(setList(list))}
      )
  }
}

export function setList (list) {
  return { type: ALBUMS_SET_LIST_ACTION, payload: list }
}

export function isLoading () {
  return { type: ALBUMS_LOADING_ACTION, payload: true }
}