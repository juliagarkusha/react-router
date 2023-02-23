import { useNavigate, useSearchParams } from "react-router-dom";
// Local deps
import "./";

function AlbumCard (props) {
  const {
    album,
  } = props;

  const { id, title } = album;

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  console.log('debug searchParams: ', searchParams.get('id'));

  function onButtonClick () {
   // navigate(`/users/:id/albums/${id}`)
  }

  return (
    <article className="AlbumCard">
      <h4>{title}</h4>
      <button onClick={onButtonClick}>Show photos</button>
    </article>
  )
}

export default AlbumCard;
