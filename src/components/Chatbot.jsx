import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import gptLogo from '../assets/chatgpt.svg';
// import addBtn from '../assets/add-30.png';
// import msgIcon from '../assets/message.svg';
import home from '../assets/home.svg';
import saved from '../assets/bookmark.svg';
import rocket from '../assets/rocket.svg';
import sendBtn from '../assets/send.svg';
import userIcon from '..//assets/user-icon.jpeg';
import gptImgLogo from '../assets/chatgptLogo.svg';

function Chatbot() {
  const msgEnd = useRef(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi, I`m AgroBot. Designed to help you with your queries.",
      isBot: true,
    },
  ]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handleSend = async () => {
    const text = input;
    setInput((prevInput) => '');
    setMessages((prevMessages) => [
      ...prevMessages,
      { text, isBot: false },
    ]);

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: text }),
      });
      const responseData = await response.json();

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: responseData.details[0], isBot: true },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleEnter = async (e) => {
    if (e.key === 'Enter') await handleSend();
  };

  const handleQuery = async (e) => {
    const text = e.target.value;
    setInput((prevInput) => '');
    setMessages((prevMessages) => [
      ...prevMessages,
      { text, isBot: false },
    ]);

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: text }),
      });
      const responseData = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: responseData.details[0], isBot: true },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="main" style={{padding:"10px"}}>
    <div id="background-chatbot" style={{backgroundColor:"rgb(255,255,255,0.3)", borderRadius:"10px"}}>
      <div className="chats">
        {messages.map((message, i) => (
          <div key={i} className={message.isBot ? 'chat bot' : 'chat'}>
            <img
              className="chatImg"
              src={message.isBot ? gptImgLogo : userIcon}
              alt="GPT"
            />
            <p className="txt">{message.text}</p>
          </div>
        ))}
        <div ref={msgEnd}></div>
      </div>
      <div className="chatFooter">
        <div className="inp">
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onKeyDown={handleEnter}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="send" onClick={handleSend}>
            <img src={sendBtn} alt="Send" />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Chatbot;
