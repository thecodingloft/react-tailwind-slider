import { useState } from 'react'
import './App.css'

// components
import Slider from './compontents/Slider'

// images
import hills from './assets/hills.jpg';
import mountainLake from './assets/mountain-lake.jpg';
import seaside from './assets/seaside.jpg';
import stream from './assets/stream.jpg';
import valley from './assets/valley.jpg';

const images = [hills, mountainLake, seaside, stream, valley]

function App() {

  return (
    <div className="App">
      <Slider 
        images={images}
        title="Our Nature Trips"
      />
    </div>
  )
}

export default App
