import { useState } from "react";

const Users = () => {
  const [uesrs, setUsers] = useState([
    { id: 1, name: "Vasyl" },
    { id: 2, name: "Petro" },
  ]);
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default Users;
