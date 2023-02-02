import React from 'react';  
import Header from './components/Header';
import Accueil from './pages/Accueil';
import Banniere from './pages/Banniere';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banniere/>
      <Accueil/>
    </div>
  );
}

export default App;
