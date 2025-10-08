import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signinCallback } from '../services/authService';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const completeLogin = async () => {
      try {
        await signinCallback();
        navigate('/');
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    completeLogin();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;
