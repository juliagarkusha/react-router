import Api from "../../api/Api";

export const PHOTOS_SET_LIST_ACTION = 'setPhotos';
export const PHOTOS_LOADING_ACTION = 'loading';

export function getList () {
  return (dispatch) => {
    dispatch(isLoading());

    Api
      .getList('photos')
      .then(list => {
        dispatch(setList(list))}
      )
  }
}

export function setList (list) {
  return { type: PHOTOS_SET_LIST_ACTION, payload: list }
}

export function isLoading () {
  return { type: PHOTOS_LOADING_ACTION, payload: true }
}