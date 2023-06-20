import logo from "../img/airbnb.png";

function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="Airbnb logo" className="logo-img" />
    </nav>
  );
}

export default Navbar;
