import React, { useState } from "react";
import Parant from "./Parant";
import CounterContext from "./CounterContext";

function App() {
  let CounterState = useState(0);
  return (
    <CounterContext.Provider value={CounterState}>
      <div className="App">
        <Parant />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
