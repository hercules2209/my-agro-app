import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';
import PrivateRoute from './components/PrivateRoute.js';
import Forgotpassword from "./components/Forgotpasswords.jsx";
import UpdateProfile from "./components/Updateprofile.jsx";
import Chatbot from "./components/Chatbot.jsx";
import ChatWithImageUpload from "./components/ChatWithImageUpload.jsx";
import Croprecommend from "./components/Croprecommend.jsx";
import Home from "./components/Home.jsx";
import Logup from "./components/Logup.jsx";
function AppRouter() {
  return (
    <Router>
      {/* No need for AuthProvider, access auth directly in components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Chatbot />} />
        <Route path="/disease" element={<ChatWithImageUpload />} />
        <Route path="/recommend" element={<Croprecommend />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logup" element={<Logup/>} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
