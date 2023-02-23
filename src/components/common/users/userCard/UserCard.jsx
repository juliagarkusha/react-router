import { useNavigate } from "react-router-dom";
// Local deps
import "./UserCard.scss";

function UserCard (props) {
  const {
    user,
  } = props;

  const { id, name, phone } = user;
  const navigate = useNavigate();

  function onButtonClick () {
    navigate(`/users/${id}/albums`)
  }

  return (
    <article className="UserCard">
      <p className="UserCard-info">
        <span>Name:</span>
        <strong>{name}</strong>
      </p>
      <p className="UserCard-phone">
        <span>Phone:</span>
        <span>{phone}</span>
      </p>
      <button onClick={onButtonClick}>Show albums</button>
    </article>
  )
}

export default UserCard;
