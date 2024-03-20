import { useState, useEffect } from "react";
import Header from "./components/Header";
import GuitarCollection from "./components/GuitarCollection";
import Footer from "./components/Footer";
import { db } from "./data/database";

function App() {

  const [guitars, setGuitars] = useState(db)
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) ?? [])

  useEffect(()=>{

    localStorage.setItem("cart", JSON.stringify(cart))

  },[cart])

  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <GuitarCollection guitars={guitars} cart={cart} setCart={setCart} />
      <Footer />
    </>
  );
}

export default App;
