import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loaderUsers = useLoaderData();
  const [users, setUsers] = useState(loaderUsers);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <h2>Total users: {users.length}</h2>
      <div>
        {users.map((user, index) => (
          <p key={user._id}>
            {index + 1}. {user.name} : {user.email}
            <button onClick={() => handleDelete(user._id)}>Delete User</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
