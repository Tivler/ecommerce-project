import React from 'react';
import './_Featured.scss';
import Albums from '../Albums';

class Featured extends React.Component {
    render () {
        const featuredList = this.props.albums.map((album,index) => {
            return (
                <Albums key={index} albums={album}/>
            )
        });

        return (
        <div className="album">
            <div className="album__wrapper">
                {featuredList}
            </div>
        </div>
        )
    }
}
 
export default Featured;