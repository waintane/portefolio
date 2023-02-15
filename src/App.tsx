import React from 'react';  
import Footer from './components/Footer';
import Header from './components/Header';
import Banniere from './pages/Banniere';
import Competences from './pages/Competences';
import Contact from './pages/Contact';
import Projets from './pages/Projets';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banniere/>
      <div className='page-content'>
        <Competences/>
        <Projets/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
