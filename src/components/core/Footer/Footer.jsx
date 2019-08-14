import React from 'react';
import './_Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

const Footer = () => {
    return (
    
    <> 
        <section className="contact__section">

            <div className="contact__section--wrapper">
                <h2 className="contact__section__heading">Connect with us on social media</h2>
            </div>

        </section>

        <footer className="footer">

            <nav className="footer__nav">
                <ul className="footer__nav__list">
                    <li><a className="footer__nav__list--item" href="/index.html">Home</a></li>
                    <li><a className="footer__nav__list--item" href="/albums.html">Products</a></li>
                    <li><a className="footer__nav__list--item" href="/contact.html">Contact</a></li>
                </ul>
            </nav>

            <div className="footer__icons">
                <a className="footer__icons--icon" href="https://www.linkedin.com/in/thomas-mckyer/"><FontAwesomeIcon icon={['fab' , 'linkedin']} /></a>
                <a className="footer__icons--icon" href="https://www.instagram.com/tmckyer/"><FontAwesomeIcon icon={['fab' , 'instagram']} /></a>
                <a className="footer__icons--icon" href="https://github.com/tivler"><FontAwesomeIcon icon={['fab' , 'github-square']} /></a>
            </div>
            
            <p className="copyright">Copyright &copy; 2019 Slotify.io</p>
        </footer>
    </>

    )
}

export default Footer;