import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async() => {
      const response = await fetch('/api/v1/users');
      const allUsers = await response.json();
      setUsers(allUsers);
    }

    getUsers();
  }, [])

  return (
    <>
      <h1>Super Rollercoasters</h1>

      <ul>
      {
        users.map((user) => {
          return <li key={user.id}>{user.username}</li>
        })
      }
      </ul>
    </>
  )
}

export default App
