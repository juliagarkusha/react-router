import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { getPhotos } from "../../../store/actions/photos";
import Loader from "../../ui/Loader";
import "./PhotosList.scss";

// Local deps

function PhotosList () {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const photos = useSelector(state => state.photos.list);
  const isLoading = useSelector(state => state.photos.loading);

  useEffect(() => {
    dispatch(getPhotos(albumId))
  }, [dispatch])

  if(isLoading) {
    return <Loader />
  }

  return (
    <ul className="PhotosList">
      {photos.map(photo => (
        <li key={photo.id}>
          <img src={photo.url} alt={photo.title}/>
          <p>{photo.title}</p>
        </li>
      ))}
    </ul>
  )
}

export default PhotosList;
