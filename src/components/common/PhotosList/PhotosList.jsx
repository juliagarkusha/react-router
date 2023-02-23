import { useNavigate } from "react-router-dom";
// Local deps

function PhotosList (props) {
  const {
    photos,
  } = props;

  const { url, title } = photos;

  return (
    <ul>
      {photos.map(photo => (
        <li key={photo.id}>
          <img src={url} alt={title}/>
          <p>title</p>
        </li>
      ))}
    </ul>
  )
}

export default PhotosList;
