import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>

      <h2
        style={{
          color: count > 0 ? "green" : count < 0 ? "red" : "black",
        }}
      >
        {count}
      </h2>

      <div className="buttons">
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default App;