
import React from 'react';
import Header from './components/Header.jsx';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import './App.css'
import Navbar from './components/Navbar.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Key from './components/Key.jsx';
import Navbar2 from './components/Page2/Navbar2.jsx';
import Sponser from './components/Sponser.jsx';
// import Card from './components/Casrd.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Header />
      <Sponser/>
      <Services />
      <Destinations />
      <Features />
      <Key/>
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
     
    
  );
}

export default App;