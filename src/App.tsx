import React from 'react';
import './App.css';
import RandomImage from './components/RandomImage'

function App() {

  const importAll = (r: __WebpackModuleApi.RequireContext) => {
    return r.keys().map(r);
  }

  const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg)$/));

  const strs = images.map(image => { return image as string })

  return (
    <>
      <RandomImage imagePaths={strs} />
    </>
  );
}

export default App;
