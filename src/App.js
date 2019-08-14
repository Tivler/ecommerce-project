import React from 'react';
import Navbar from './components/core/Navbar/Navbar';
import Slider from './components/features/Slider/Slider';
import Featured from './components/features/Featured/Featured';
import albums from './albums'
import featured from './featured';
import Footer from './components/core/Footer/Footer';
import Quotes from './components/features/Quotes/Quotes';

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
        <Quotes />
        <Footer />
      </div>
    );
  }
}

export default App;
