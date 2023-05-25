import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Accueil
      </NavLink>
      <NavLink
        to="/continents"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Liste des continents
      </NavLink>
    </nav>
  );
}

export default Navbar;
