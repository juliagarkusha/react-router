// External deps
import { combineReducers } from "redux";

// Local deps
import usersReducer from "./users";
import albumsReducer from "./albums";
import photosReducer from "./photos";

const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer,
})

export default rootReducer;