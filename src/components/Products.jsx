import React from 'react';
import Albums from './Albums'

class Products extends React.Component {
    render () {
        const albumList = this.props.albums.map((album,index) => {
            return (
                <Albums key={index} albums={album}/>
            )
        });

        return (
        <div className="album">
            <div className="album__wrapper">
                {albumList}
            </div>
        </div>
        )
    }
}

export default Products