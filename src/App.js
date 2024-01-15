import logo from "./logo.svg";
import "./App.css";
import React, { Suspense, lazy, useState } from "react";

const MyComponent = React.lazy(() => import("./MyComponent"));
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Suspense fallback={<p>loading...</p>}>
        <MyComponent state={count} />
      </Suspense>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
