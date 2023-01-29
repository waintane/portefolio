import React from 'react';  
import Header from './components/Header';
import Accueil from './pages/Accueil';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Accueil/>
    </div>
  );
}

export default App;
