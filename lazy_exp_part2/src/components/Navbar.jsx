import { Link } from "react-router-dom";

const File = () => {
  return (
    <nav className="neon-navbar">
      <div className="nav-logo">Bianca</div>
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default File;