import React from "react";
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from "./Components/Containers/ItemListContainer";
import ItemCount from "./Components/Containers/ItemCount";



const App = () => {
  const saludo = `Encontrá tu funko acá. Somos el importador más grande de FunkoPops de Argentina.`
  
  
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={saludo} />
    </>
  )
}

export default App
