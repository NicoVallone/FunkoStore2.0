import React from "react";
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from "./Components/Containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/Containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Cart } from "./Components/Containers/CartView/Cart";

const App = () => {
  const saludo = `Encontrá tu funko acá. Somos el importador más grande de FunkoPops de Argentina.`
  
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={saludo} />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting={saludo} />} />
          <Route path="/producto/:idFunko" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
