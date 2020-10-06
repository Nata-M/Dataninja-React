import React from 'react';
import './components/style.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div id='full-page'>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
