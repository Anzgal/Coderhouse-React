//import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App bg-slate-900 text-white min-h-screen">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenido a la tienda!" />}
          />
          <Route
            path="/category/:categoryid"
            element={<ItemListContainer greeting="Bienvenido a la tienda!" />}
          />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        </Routes>
        {/* <ItemListContainer greeting="Bienvenido a la tienda!" /> */}
        {/* <div className="App-header">
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
        </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
