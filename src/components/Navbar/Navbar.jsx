
import "./navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="nav">
            <NavLink to="/profile" >Profile</NavLink>
            <NavLink to="/tasks" >Tasks</NavLink>
        </nav>
    )
}
export default Navbar;
