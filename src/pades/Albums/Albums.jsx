import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../store/actions/albums";

function Albums () {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums.list);

  useEffect(() => {
    dispatch(getList())
  }, [dispatch])

  console.log('debug users: ',  albums);

  return(
    <section>Albums</section>
  )
}

export default Albums;
