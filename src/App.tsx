import React from 'react';
import './App.css';
import RandomImage from './components/RandomImage'
import LoopSlider from './components/LoopSlider'

function App() {

  const importAll = (r: __WebpackModuleApi.RequireContext) => {
    return r.keys().map(r);
  }

  const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg)$/));

  const strs = images.map(image => { return image as string })

  return (
    <>
      <h1>All Images</h1>
      <div style={{ width: 'auto', display: 'flex', overflow: 'hidden' }}>{strs.map(image => <img src={image} alt={image} key={image} />)}</div>
      <hr />
      <h1>Random 6 Image</h1>
      <RandomImage imagePaths={strs.concat()} />
      <hr />
      <h1>Infinite Scroll Image</h1>
      <LoopSlider imagePaths={strs} />
    </>
  );
}

export default App;
