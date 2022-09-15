import React, { useState } from "react";

const Accordion = ({ icon, nav, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-titles" onClick={() => setIsActive(!isActive)}>
        <div className="accordion-title">
          <div style={{ color: "red", fill: "red" }}>{icon}</div>
          <div>{nav}</div>
        </div>
        <div style={{ fontSize: "15px" }}>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {content.map((item) => (
            <p style={{ paddingLeft: "30px", fontSize: "13px" }}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
