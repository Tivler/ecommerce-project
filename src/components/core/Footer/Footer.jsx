import React from 'react';
import './_Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

library.add(fab);

const Footer = () => {
    return (
    
    <> 
        <footer className="footer">
            <h2 className="footer__heading">Get In Touch</h2>
            <div className="footer__socials">
                <a className="footer__socials__icon" href="https://www.linkedin.com/in/thomas-mckyer/"><FontAwesomeIcon className="footer__socials__icon--size" icon={['fab' , 'linkedin']} /><span className="label">LinkedIn</span></a>
                <a className="footer__socials__icon divider" href="https://www.instagram.com/tmckyer/"><FontAwesomeIcon className="footer__socials__icon--size" icon={['fab' , 'instagram']} /><span className="label">Instagram</span></a>
                <a className="footer__socials__icon" href="https://github.com/tivler"><FontAwesomeIcon className="footer__socials__icon--size" icon={['fab' , 'github-square']} /><span className="label">Github</span></a>
            </div>

            <nav className="footer__nav">
                <div className="footer__info">
                    <a className="footer__info__icon" href="https://www.linkedin.com/in/thomas-mckyer/"><FontAwesomeIcon className="footer__info__icon--size" icon={faPhoneAlt} /><span className="label">(704) 808 8000</span></a>
                    <a className="footer__info__icon divider" href="https://www.instagram.com/tmckyer/"><FontAwesomeIcon className="footer__info__icon--size" icon={faEnvelope} /><span className="label">information@slotify.io</span></a>
                    <a className="footer__info__icon" href="https://github.com/tivler"><FontAwesomeIcon className="footer__info__icon--size" icon={faMapMarkerAlt} /><span className="label">123 Somewhere Lit Drive, Charlotte, NC 28277</span></a>
                </div>
            </nav>

            <div className="copyright">
                <p className="copyright__text">Copyright &copy; 2019 Slotify.io</p>
            </div>
        </footer>
    </>

    )
}

export default Footer;