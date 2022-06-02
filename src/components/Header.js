import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Math Magician</h1>
            <nav>
                <Link className="menu-item" to="/">Home</Link>
                <Link className="menu-item" to="/Calculator">Calculator</Link>
                <Link className="menu-item" to="/Quote">Quote</Link>
            </nav>
        </header>
    );
}

export default Header;
