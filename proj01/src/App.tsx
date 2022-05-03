import React from 'react';
import HTheader from './HTHeader/HTHeader';
import HTmain from './HTmain/HTmain';
import HTcompany from './HTcompany/HTcompany';
import HTbannerPage from './HTbannerPage/HTbannerPage';
import HThoneystroy2 from './HThoneystory2/HThoneystory2';
import HTsweetnews from './HTsweetnews/HTsweetnews';
import HTlink from './HTlink/HTlink';
import HTfooter from './HTfooter/HTfooter';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HTheader/>
      </header>
      <section>
        <HTmain/>
        <HTcompany/>
        <HTbannerPage/>   
        <HThoneystroy2/>
        <HTsweetnews/>
        <HTlink/>   
      </section>
      <footer>
        <HTfooter/>
      </footer>

    </div>
  );
}

export default App;
