import React from 'react';
import { Button } from 'rizzui'; 
import { useNavigate } from 'react-router-dom'; 

function Homepage() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-200">
      <h1 className="mb-6 text-5xl font-bold text-gray-800">Welcome to Cook Book</h1>
      <p className="mb-6 text-xl text-gray-800">Discover, share, and enjoy cooking recipes from around the world!</p>
      <Button onClick={handleSignup} className="mb-4 bg-gray-800 text-white py-2 px-4 rounded">
        Get Started
      </Button>
      <Button onClick={handleLogin} className="bg-gray-800 text-white py-2 px-4 rounded">
        Login
      </Button>
    </div>
  );
}

export default Homepage;