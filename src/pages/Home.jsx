import { useEffect, useState } from 'react';
import { login, logout, getUser } from '../services/authService';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getUser();
      setUser(currentUser);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>CIAM Demo</h1>
      {user ? (
        <div>
          <p>Welcome, {user.profile.name}</p>
          <button onClick={logout}>Logout</button>
          <h2>ID Token Claims</h2>
          <pre>{JSON.stringify(user.profile, null, 2)}</pre>
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Home;
