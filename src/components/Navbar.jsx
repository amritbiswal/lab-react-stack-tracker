import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h1>Stack Tracker</h1>
      </Link>
    </nav>
  );
}

export default Navbar;
