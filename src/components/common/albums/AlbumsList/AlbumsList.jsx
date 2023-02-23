import AlbumCard from "../AlbumCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getList} from "../../../../store/actions/albums";

function AlbumsList () {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums.list);

  useEffect(() => {
    dispatch(getList())
  }, [dispatch])

  return (
    <div>
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          album={album}
        />
      ))}
    </div>
  )
}

export default AlbumsList;
