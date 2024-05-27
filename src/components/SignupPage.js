import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'rizzui';

function SignupPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
    // Log the user data for now
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 w-72 bg-white rounded shadow-md border border-gray-300">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Sign Up</h1>
      <Input className="mb-4 w-64 p-2 border border-gray-300 rounded" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} /> 
      <Input className="mb-4 w-64 p-2 border border-gray-300 rounded" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
      <Input className="mb-4 w-64 p-2 border border-gray-300 rounded" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <Input className="mb-4 w-64 p-2 border border-gray-300 rounded" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <Button className="mb-4 w-64 py-2 bg-blue-500 text-white rounded" onClick={handleSignup}>Sign Up</Button>
      <Link to="/login" className="text-blue-500 hover:underline">Already have an account? Login</Link>
      </div>
    </div>
  );
}

export default SignupPage;