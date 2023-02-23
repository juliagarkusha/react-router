import { useNavigate, useParams } from "react-router-dom";
import "./AlbumCard.scss";

function AlbumCard (props) {
  const {
    album,
  } = props;

  const { id, title } = album;
  const navigate = useNavigate();
  const { userId } = useParams();

  function onButtonClick () {
   navigate(`/users/${userId}/albums/${id}`)
  }

  return (
    <article className="AlbumCard">
      <h4>{title}</h4>
      <button onClick={onButtonClick}>Show photos</button>
    </article>
  )
}

export default AlbumCard;
