import { useState } from "react";
import image from "../assets/sociality.png";
import Accordion from "./Accordion";
import { accordiondata } from "./accordionData";
const Navbar = () => {
  const [color, setColor] = useState("");
  const [show, setShow] = useState(false);
  const toggleClick = (e) => {
    setColor(e.target.id);
    setShow((current) => !current);
  };

  return (
    <div>
      <div className="logo">
        <img src={image} alt="sociality" />
      </div>
      <navbar className="navbar">
        <div className="sidebar">
          <ul>
            <li
              onClick={toggleClick}
              id="one"
              className={color === "one" ? "active" : ""}
            >
              one
            </li>
            <li
              onClick={toggleClick}
              id="two"
              className={color === "two" ? "active" : ""}
            >
              Tow
            </li>
            <li>Three</li>
          </ul>
        </div>
        <div className="accordion">
          {accordiondata.map(({ nav, content, icon }) => (
            <Accordion nav={nav} content={content} icon={icon} />
          ))}
        </div>
      </navbar>
    </div>
  );
};
export default Navbar;
