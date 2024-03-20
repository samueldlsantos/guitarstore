import { useState } from "react";
import Header from "./components/Header";
import GuitarCollection from "./components/GuitarCollection";
import Footer from "./components/Footer";
import { db } from "./data/database";

function App() {

  const [guitars, setGuitars] = useState(db)
  const [cart, setCart] = useState([])

  return (
    <>
      <Header cart={cart} />
      <GuitarCollection guitars={guitars} setCart={setCart} />
      <Footer />
    </>
  );
}

export default App;
