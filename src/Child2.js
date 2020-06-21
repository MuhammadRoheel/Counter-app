import React, { useReducer } from "react";
import CounterReducer from "./CounterReducer";

export default function Child2() {
  let [state, dispatch] = useReducer(CounterReducer, 0);

  return (
    <div>
      <h2>Second Child using counter reducer</h2>
      <h3>Value of reducer state is: {state}</h3>
      <button onClick={() => dispatch("INCREAMENT")}>Increament</button>
      <button onClick={() => dispatch("DECREAMENT")}>Decreament</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </div>
  );
}
