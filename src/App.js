import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <Slider />
      </div>
    );
  }
}

export default App;
