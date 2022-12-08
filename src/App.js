//import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartView from "./components/CartView/CartView";

import { CartContextProvider } from "./storage/CartContext";

function App() {
  return (
    <div className="App bg-slate-900 text-white min-h-screen">
      <CartContextProvider>
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
            <Route path="/cart" element={<CartView />} />
            <Route
              path="/checkout/:orderid"
              element={<h1>Gracias por tu compra</h1>}
            />
            <Route path="*" element={<h1>404: Ruta no encontrada</h1>} />
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
      </CartContextProvider>
    </div>
  );
}

export default App;
