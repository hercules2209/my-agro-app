import React, { useState } from 'react';
import './Joshua-css/Accordion.css'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div style={{display:"flex"}}>{title} &nbsp; {isActive ? <FaMinus /> : <FaPlus/>}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;