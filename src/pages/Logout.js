import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  localStorage.removeItem('access-token');
  localStorage.removeItem('userLoggedIn');
  return (
    <button
      className='logout'
      onClick={() => {
        navigate('/login');
      }}
    >
      Logout
    </button>
  );
}

export default Logout;
