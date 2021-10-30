import React, { useState } from 'react';
import Data from './Data.json';
import Card from './Card';
import './App.css';

function App() {
  const [active, setActive] = useState("ThirdCard");

  return (
    <div className="App">
      <nav>
        <button onClick={() => setActive("FirstCard")}>One</button>
        <button onClick={() => setActive("SecondCard")}>Two</button>
        <button onClick={() => setActive("ThirdCard")}>Three</button>
      </nav>
      <div>
        {active === "FirstCard" && <Card data={Data} cardIndex={0} />}
        {active === "SecondCard" && <Card data={Data} cardIndex={1} />}
        {active === "ThirdCard" && <Card data={Data} cardIndex={2} />}
      </div>
    </div>
  );
}

export default App;
