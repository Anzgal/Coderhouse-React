import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App bg-slate-900">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la tienda!" />
      <div className="App-header">
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
      </div>
    </div>
  );
}

export default App;
