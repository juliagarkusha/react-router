import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../store/actions/photos";

function Photos () {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos.list);

  useEffect(() => {
    dispatch(getList())
  }, [dispatch])

  console.log('debug photos: ',  photos);

  return(
    <section>photos</section>
  )
}

export default Photos;
