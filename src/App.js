import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import LayoutContext from './context/LayoutContext';

function App() {
  const layoutContext = useContext(LayoutContext);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={layoutContext.toggleSidebar}>toggle</button>
        {layoutContext.isSidebarOpened ? 'open' : 'closed'}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
