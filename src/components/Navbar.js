import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rizzui';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5 bg-blue-500">
      <Link to="/" className="text-2xl font-bold text-gray-500">Cook Book</Link>
      <div className="flex items-center">
        <Link to="/login" className="mr-4">
          <Button className="bg-white text-blue-500 py-2 px-4 rounded">Login</Button>
        </Link>
        <Link to="/signup">
          <Button className="bg-white text-blue-500 py-2 px-4 rounded">Sign Up</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;