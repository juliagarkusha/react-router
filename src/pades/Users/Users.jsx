import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/actions/users";
import UserList from "../../components/common/users/UserList";

function Users () {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.list);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  return(
    <section>
      <h1>Users</h1>
      <UserList users={users} />
    </section>
  )
}

export default Users;
