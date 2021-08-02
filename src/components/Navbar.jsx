import '../styles/components/Navbar.scss';
import React, { useMemo, useState } from 'react';
import {
    Link
} from "react-router-dom";

const routes = {
    '/': 'Home',
    '/about': 'About',
    '/users': 'Users',
}

const Navbar = () => {
    const [currPage, setCurrPage] = useState('/');
    const navbarItems = useMemo(() => {
        return Object.entries(routes).map(([k, v]) => (
            <li
                key={v}
                className={`navbar__item ${k===currPage ? 'on' : ''}`}
                onClick={() => setCurrPage(k)}
            >
                <Link to={k}>{v}</Link>
            </li>
        ))
    }, [currPage]);
    
    return (
        <nav className="navbar">
            <ul className="navbar__inner">
                {navbarItems}
            </ul>
        </nav>
    );
}

export default Navbar;