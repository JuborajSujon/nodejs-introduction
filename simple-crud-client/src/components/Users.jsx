import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>Total users: {users.length}</h2>
      <div>
        {users.map((user, index) => (
          <p key={user._id}>
            {index + 1}. {user.name} : {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
