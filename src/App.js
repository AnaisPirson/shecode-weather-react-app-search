import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card card-body">
          <h1 className="title">RainCheck</h1>
          <Weather defaultCity="Amsterdam" />
        </div>
        <footer className="pl-1">
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Open-Source Code{" "}
          </a>
          by Anais Pirson
        </footer>
      </div>
    </div>
  );
}

export default App;
