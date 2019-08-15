import React from 'react';
import './_Navbar.scss';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

    <nav className="nav">

        <input type="checkbox" id="nav" className="nav--hidden"></input>
        <div className="nav__menu--wrapper">
            <label htmlFor="nav" className="nav__menu--button">
                <i></i>
                <i></i>
                <i></i>
            </label>
        </div>

        <div className="nav__logo--wrapper">
            <a href="https://github.com/Tivler" className="nav__logo__text">SoundBloud</a>
        </div>

        <div className="nav__list--wrapper">
            <ul className="nav__list__ul">
                <li className="nav__list__ul--item"><Link className="nav__list__ul--link active" to="/">Home</Link></li>
                <li className="nav__list__ul--item"><Link className="nav__list__ul--link" to="/products">Albums</Link></li>
                <li className="nav__list__ul--item"><Link className="nav__list__ul--link" to="/contacts">Contact</Link></li>
            </ul>
        </div>

    </nav>

    )
}

export default Navbar;