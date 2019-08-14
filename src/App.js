import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Featured from './components/Featured/Featured';
import albums from './albums'
import featured from './featured';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums,
      featured,
    }  
  };

  render () {
    return (
      <div className="App">
        <Navbar />
        <Slider />
        <Featured albums={this.state.featured} />
      </div>
    );
  }
}

export default App;
