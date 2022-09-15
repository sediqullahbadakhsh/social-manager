import image from "../assets/sociality.png";
const Navbar = () => {
  return (
    <div>
      <div className="logo">
        <img src={image} alt="sociality" />
      </div>
      <navbar className="navbar">
        <div className="sidebar">
          <ul>
            <li>one</li>
            <li>Tow</li>
            <li>Three</li>
          </ul>
        </div>
        <div className="accordion">
          <ul>
            <li>one</li>
            <li>Tow</li>
            <li>Three</li>
          </ul>
        </div>
      </navbar>
    </div>
  );
};
export default Navbar;
