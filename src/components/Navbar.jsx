import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="py-6 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-heading font-semibold text-white">
        VIDEO GAMES
      </h1>

      <div className="space-x-8">
        <Link to="/" className="text-white font-heading">
         HOME
        </Link>
        <Link to="/contact" className="text-white font-heading">
          CONTACT
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
