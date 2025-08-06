import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button style={{ marginLeft: "10px" }} onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}
