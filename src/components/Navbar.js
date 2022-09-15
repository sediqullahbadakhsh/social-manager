import { useState } from "react";
import image from "../assets/sociality.png";
import Accordion from "./Accordion";
import { accordiondata } from "./accordionData";
import { FcCdLogo, FcWiFiLogo, FcDvdLogo } from "react-icons/fc";
const Navbar = () => {
  const [color, setColor] = useState("");
  const toggleClick = (e) => {
    setColor(e.target.id);
  };

  return (
    <div>
      <div className="logo">
        <img src={image} alt="sociality" />
      </div>
      <navbar className="navbar">
        <div className="sidebar">
          <div>
            <FcCdLogo
              onClick={toggleClick}
              id="one"
              className={color === "one" ? "active" : ""}
            />
          </div>
          <div>
            <FcDvdLogo
              onClick={toggleClick}
              id="two"
              className={color === "two" ? "active" : ""}
            />
          </div>
          <div>
            <FcWiFiLogo
              onClick={toggleClick}
              id="three"
              className={color === "three" ? "active" : ""}
            />
          </div>
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
