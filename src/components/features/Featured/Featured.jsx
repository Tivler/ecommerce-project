import React from 'react';
import './_Featured.scss';
import Albums from '../../Albums';

class Featured extends React.Component {
    render () {
        const featuredList = this.props.albums.map((album,index) => {
            return (
                <Albums key={index} albums={album}/>
            )
        });

        return (
        <div className="album">
            <h2 className="album__title">Featured Albums</h2>
            <p className="album__description">Slotify has all of your favorite albums right at your fingers</p>

            <div className="album__wrapper">
                {featuredList}
            </div>
        </div>
        )
    }
}
 
export default Featured;