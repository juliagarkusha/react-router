import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav () {
  const activeClass = ({ isActive }) => isActive ? 'Nav-active' : undefined
  return (
    <nav className="Nav">
      <NavLink className={activeClass} to="/users">users</NavLink>
      <NavLink className={activeClass} to="/albums">albums</NavLink>
      <NavLink className={activeClass} to="/photos">photos</NavLink>
    </nav>
  )
}

export default Nav;
