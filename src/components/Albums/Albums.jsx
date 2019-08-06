import React from 'react';
import '../Albums/_albums.scss'

const Albums = (props) => {

    return (
        <>
            <a className="album__wrapper--link" rel="noopener noreferrer" href="https://soundcloud.com/tee-grizzley/sets/activated" target="_blank">
                <div className="album__wrapper--overlay">
                    <h3 className="album__wrapper__heading">{props.albums.title} - {props.albums.artist}</h3>
                    <p className="album__wrapper__description">Price <span>{props.albums.price}</span></p>
                </div>
            </a>
        </>
    )
}

export default Albums