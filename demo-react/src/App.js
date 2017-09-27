import React, { Component } from 'react';
import Slider from './organisms/Slider';
import UnsplashImage from './components/UnsplashImage'
import './App.css';

const unsplashItems = [
  { keyword: 'waterfall' },
  { keyword: 'paradise' },
  { keyword: 'beach' },
  { keyword: 'sunset' }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slider
          items={ unsplashItems }
          ItemComponent={ UnsplashImage }
        />
      </div>
    );
  }
}

export default App;
