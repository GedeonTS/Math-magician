import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Math Magician</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Calculator">Calculator</Link>
                <Link to="/Quote">Quote</Link>
            </nav>
        </header>
    );
}

export default Header;