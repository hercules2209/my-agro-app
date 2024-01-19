import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import {auth} from '../firebase';
function Dashboard() {
  const [error, setError] = useState('');
  const currentUser = auth.currentUser; // Get current user directly
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError('');
    
    try {
      await signOut(auth); // Use signOut from Firebase
      navigate('/login');
    } catch (error) {
      setError('Failed to log out');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-medium mb-4">Profile</h2>
        {error && <div className="bg-red-500 text-white p-4 rounded-lg mb-4">{error}</div>}
        <p className="mb-4"><strong>Email:</strong> {currentUser.email}</p>
        <Link to="/update-profile" className="bg-blue-500 text-white px-4 py-2 rounded font-medium w-full">
          Update Profile
        </Link>
      </div>
      <div className="text-center mt-4">
        <button className="text-blue-600 hover:underline" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
