import React from 'react';
import { Link } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>This is the Header</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/mobiles'>Mobile</Link>
                <Link to='/laptops'>Laptops</Link>
                <Link to='/users'>Users</Link>
            </nav>
        </div>
    );
}

export default Header;