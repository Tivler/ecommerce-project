import React from 'react';
import './_Navbar.scss';

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
            <a href="https://github.com/Tivler" className="nav__logo__text">Slotify</a>
        </div>

        <div className="nav__list--wrapper">
            <ul className="nav__list__ul">
                <li className="nav__list__ul--item"><a className="nav__list__ul--link active" href="/index.html">Home</a></li>
                <li className="nav__list__ul--item"><a className="nav__list__ul--link" href="/albums.html">Albums</a></li>
                <li className="nav__list__ul--item"><a className="nav__list__ul--link" href="/contact.html">Contact</a></li>
            </ul>
        </div>

    </nav>

    )
}

export default Navbar;