import React, { useState } from "react";

const Accordion = ({ icon, nav, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{icon}</div>
        <div>{nav}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {content.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
