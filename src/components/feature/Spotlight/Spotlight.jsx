import React from 'react';
import './_Spotlight.scss';

import { Link } from 'react-router-dom';

const Spotlight = () => {
    return (
        <>
        <div className="spotlight__wrapper">
             <Link className="spotlight__wrapper--link post" rel="noopener noreferrer" href="+" target="_blank">
                <div className="spotlight__wrapper--overlay">
                    <h3 className="spotlight_wrapper__heading">Activated - Tee Grizzley</h3>
                    <p className="spotlight__wrapper__description">Price <span>10.99</span></p>
                </div>
            </Link>

            <div>
                HELLO
            </div>
        </div>
        </>
    )
}

export default Spotlight;