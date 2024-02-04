import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  interface User {
    id: number;
    name: string;
  }

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/xusers')
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <p className='text-danger'>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
