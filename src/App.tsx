import React from 'react';  
import Header from './components/Header';
import Banniere from './pages/Banniere';
import Competences from './pages/Competences';
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
      </div>
    </div>
  );
}

export default App;
