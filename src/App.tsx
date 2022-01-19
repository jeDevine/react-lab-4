import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <div><Header /></div>
      <div className="main"><Main /></div>
      {/* <div><Result /></div> */}
    </div>
  );
}

export default App;

//giphy key: 7AAz2WSu4qEI85ya7f8rlnnHokLsDk6f