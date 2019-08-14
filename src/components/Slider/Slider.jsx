import React from 'react';
import './_Slider.scss';

const Slider = () => {
    return (

    <>
        <div className="slider">
            <div className="slider--wrapper current">
                <div className="slider__header">
                    <h1 className="slider__header__title">A sound for everyone.</h1>
                    <p className="slider__header__subtitle">Millions of songs, when you need to get away.</p>
                    <a className="slider__header__button" href="/albums.html">View Albums</a>
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
                <a className="slider__header__button" href="/contact.html">Subscribe</a>
                </div>
            </div>
        </div>
    </>

    )
}

export default Slider;