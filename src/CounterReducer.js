function CounterReducer(state, action) {
  switch (action) {
    case "INCREAMENT":
      return ++state;

    case "DECREAMENT":
      return --state;
    case "RESET":
      return (state = 0);
  }
}

export default CounterReducer;
