import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'rizzui';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 w-72 bg-white rounded shadow-md border border-gray-300">
      <h1 className="text-3xl font-bold text-gray-900">Login</h1>
        <Input className="mb-2 w-full p-2 border border-gray-300 rounded" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input className="mb-4 w-full p-2 border border-gray-300 rounded" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button className="mb-2 w-full py-2 bg-blue-500 text-white rounded" onClick={handleLogin}>Login</Button>
        <Link to="/signup" className="text-blue-500 hover:underline">Don't have an account? Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginPage;
