import React from 'react';
import albums from './albums'
import featured from './featured';
import Navbar from './components/core/Navbar/Navbar';
import Slider from './components/features/Slider/Slider';
import Featured from './components/features/Featured/Featured';
import Footer from './components/core/Footer/Footer';
import Quotes from './components/features/Quotes/Quotes';
import Products from './components/features/Products/Products';
import Form from './components/features/Form/Form';

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
        
         <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
