import React from 'react';
import Products from './components/Products/Products'
import albums from './albums'
import './albums'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums,
    }  
  }

  render () {
    return (
      <div className="App">
        <Products albums={this.state.albums}/>
      </div>
    );
  }
}

export default App;
