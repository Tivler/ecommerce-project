import React from 'react';

import featured from '../featured';

import Slider from '../components/feature/Slider/Slider'
import Featured from '../components/feature/Featured/Featured'
import Quotes from '../components/feature/Quotes/Quotes'

class Index extends React.Component {
    render () {
        return (
        <>
        <Slider />
        <Featured albums={featured} />
        <Quotes />
        </>
    )
    }
}

export default Index;