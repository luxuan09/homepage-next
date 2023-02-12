import { NavLink } from "react-router-dom";

const InlineNavBar = () => (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/papers">Papers</NavLink>
        <NavLink to="/services">Teaching & Service</NavLink>
        <NavLink to="/awards">Awards</NavLink>
    </nav>
);

export default InlineNavBar;