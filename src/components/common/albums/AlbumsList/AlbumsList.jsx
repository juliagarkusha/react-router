import AlbumCard from "../AlbumCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getList } from "../../../../store/actions/albums";
import { getUsers } from "../../../../store/actions/users";
import { useParams } from "react-router-dom";
import Loader from "../../../ui/Loader";

function AlbumsList () {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const currentUser = useSelector(state => state.users.list.find(user => String(user.id) === userId));
  const albums = useSelector(state => state.albums.list);
  const isLoading = useSelector(state => state.albums.loading);

  useEffect(() => {
    dispatch(getList(userId));

    if(!currentUser) {
      dispatch(getUsers());
    }
  }, [dispatch])

  if(isLoading) {
    return <Loader />
  }

  return (
    <div>
      <h3>{`${currentUser?.name || 'user'}\`s albums`}</h3>
      <br />
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
