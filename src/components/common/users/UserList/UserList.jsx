import UserCard from "../userCard";

function UserList (props) {
  const {
    users,
  } = props;

  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  )
}

export default UserList;
