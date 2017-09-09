import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default: 
      return state;
  }
}

// React Component
const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const store = createStore(counter);
const render = () => {
  ReactDOM.render(
    <Counter 
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT"})}
      onDecrement={() => store.dispatch({ type: "DECREMENT"})} />, 
    document.querySelector(".container"));
}

// Fires render whenever thers is a state change.
store.subscribe(render);
render();