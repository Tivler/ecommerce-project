import React from 'react';
import './_Slider.scss';

import { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
    return (

    <>
        <div className="slider">
            <div className="slider--wrapper current">
                <div className="slider__header">
                    <h1 className="slider__header__title">A sound for everyone.</h1>
                    <p className="slider__header__subtitle">Millions of songs, when you need to get away.</p>
                    <Link className="slider__header__button" to="/products">View Albums</Link>
                </div>
            </div>
            
            <div className="slider--wrapper">
                <div className="slider__header">
                    <h1 className="slider__header__title">Find your own sound.</h1>
                    <p className="slider__header__subtitle">Using slotify is a sure way to find a sound that fits you and your personality</p>
                </div>
            </div>
            <div className="slider--wrapper">
                <div className="slider__header">
                <h1 className="slider__header__title">Stay connected</h1>
                <p className="slider__header__subtitle">Stay connected with Slotify by joining our newsletter</p>
                <Link className="slider__header__button" to="/contacts">Subscribe</Link>
                </div>
            </div>
        </div>

        {/* <div class="slider__arrows--wrapper">
            <button class="slider__arrows--mod arrow-previous"><FontAwesomeIcon icon={faArrowLeft} /></button>
            <button class="slider__arrows--mod arrow-next"><FontAwesomeIcon icon={faArrowRight} /></button>
        </div> */}
    </>

    )
}

export default Slider;