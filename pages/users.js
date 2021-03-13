import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Vasyl" },
    { id: 2, name: "Petro" },
  ]);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
