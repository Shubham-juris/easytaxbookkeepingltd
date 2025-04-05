import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Pageroute from './routes/Pageroute';

function App() {
  return (
    <>
      <Navbar/>
      <Pageroute/>
      <Footer/>
    </>
  );
}

export default App;
