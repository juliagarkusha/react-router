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
    console.log('debug : ', id);
  }

  return (
    <article className="UserCard">
      <p className="UserCard-info">
        <span>Name:</span>
        <span>{name}</span>
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
