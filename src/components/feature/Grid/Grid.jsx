import React from 'react';

import Albums from '../../Albums';
import GridHead from './GridHead';

import './_Grid.scss';
import './_Filter.scss';

class Grid extends React.Component {
    render () {
        const products = this.props.albums.map((album,index) => {
            return (
                <Albums key={index} albums={album} />
            )
        })

        return (

        <>
        <GridHead />

        <div className="album">
            <h2 className="album__title">Discover Your Sound</h2>
            <p className="album__description">All the sounds, All the waves find something that fits you</p>

            <div className="album__wrapper">
                {products}
            </div>
            <div className="filter">
                <h3 className="filter__title">Filter Albums By Price:</h3>
                <button className="filter__button filter__button--divider">High To Low</button>
                <button className="filter__button">Low To High</button>
            </div>
        </div>
        </>

        )
    }
}
 
export default Grid;