import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../store/actions/users";
import userList from "../../components/common/users/UserList";
import UserList from "../../components/common/users/UserList";

function Users () {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.list);

  useEffect(() => {
    dispatch(getList())
  }, [dispatch])
  
  console.log('debug users: ', users);

  return(
    <section>
      <h1>Users</h1>
      <UserList users={users} />
    </section>
  )
}

export default Users;
