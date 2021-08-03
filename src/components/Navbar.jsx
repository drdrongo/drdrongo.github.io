import 'styles/components/Navbar.scss';
import React from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";

const Navbar = ({ routes }) => {
    const location = useLocation();
    return (
        <nav className="navbar">
            <ul className="navbar__inner">
            {routes.map(({ path, name }) => (
                <li
                    key={path}
                    className={`navbar__item ${path === location.pathname ? 'on' : ''}`}
                >
                    <Link to={path}>{name}</Link>
                </li>
            ))}
            </ul>
        </nav>
    );
};

export default Navbar;