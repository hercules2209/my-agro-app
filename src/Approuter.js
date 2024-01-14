import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import HomePage from "./components/Home";
import Chatbot from "./components/Chatbot";
import ChatWithImageUpload from "./components/ChatWithImageUpload";
import Croprecommend from "./components/Croprecommend";

function AppRouter() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Chatbot />} />
        <Route path="/disease" element={<ChatWithImageUpload />} />
        <Route path="/recommend" element={<Croprecommend />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;