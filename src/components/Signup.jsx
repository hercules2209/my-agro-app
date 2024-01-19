import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to home page after successful signup
    } catch (error) {
      setError(error.message); // Display a more specific error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-medium mb-4">Sign Up</h2>
        {error && <div className="bg-red-500 text-white p-4 rounded-lg mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password-confirm" className="block text-gray-700 font-bold mb-2">
              Password Confirmation
            </label>
            <input
              type="password"
              id="password-confirm"
              ref={passwordConfirmRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
      <div className="text-center mt-4">
        Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log In</Link>
      </div>
    </div>
  );
}
export default Signup;
