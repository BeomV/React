import React from 'react';
//import logo from './logo.svg';

import './App.css';
import HTCompany from './HTCompany/HTCompany'
import HTMain from './HTMain/HTMain';
import HTHeader from './HTHeader/HTHeader';
import HTHoneyStory from './HTHoneyStory/HTHoneyStory';
import HTSweetNews from './HTSweetNews/HTSweetNews';
import HTFooter from './HTFooter/HTFooter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HTHeader/>
      </header>
      <nav></nav>
      <section>
        <HTMain/>
        <HTCompany/>
        <HTHoneyStroy/>
        <HTSweetNews/>
      </section>
      <footer>
        <HTFooter/>

      </footer>
    </div>
  );
}

export default App;
