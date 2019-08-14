import React from 'react';

const Albums = (props) => {
    return (
        <>
            <a className={`album__wrapper--link ${props.albums.id}`} rel="noopener noreferrer" href="https://soundcloud.com/tee-grizzley/sets/activated" target="_blank">
                <div className="album__wrapper--overlay">
                    <h3 className="album__wrapper__heading">{props.albums.title} - {props.albums.artist}</h3>
                    <p className="album__wrapper__description">Price <span>{props.albums.price}</span></p>
                </div>
            </a>
        </>
    )
}

export default Albums