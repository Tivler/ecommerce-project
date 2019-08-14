import React from 'react';
import Albums from '../../Albums';
import './_Grid.scss';
import GridHead from './GridHead';

class Grid extends React.Component {
    render () {
        const products = this.props.albums.map((album,index) => {
            return (
                <Albums key={index} albums={album}/>
            )
        });

        return (

        <>
<GridHead />

        <div className="album">
            <h2 className="album__title">Discover Your Sound</h2>
            <p className="album__description">All the sounds, All the waves find something that fits you</p>

            <div className="album__wrapper">
                {products}
            </div>
        </div>
        </>

        )
    }
}
 
export default Grid;