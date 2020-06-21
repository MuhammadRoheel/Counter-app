import React, { useContext } from "react";
import CounterContext from "./CounterContext";

function Child() {
  let counterData = useContext(CounterContext);

  return (
    <div>
      <h1>First Child using Counter Context</h1>
      <h2>Counter is value {counterData[0]}</h2>
      <button onClick={() => counterData[1](++counterData[0])}>+</button>
      <button onClick={() => counterData[1](--counterData[0])}>-</button>
      <button onClick={() => counterData[1](0)}>0</button>
    </div>
  );
}

export default Child;
