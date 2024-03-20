import Guitar from "./Guitar";

const GuitarCollection = ({ guitars, cart, setCart }) => {
  return (
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>

      <div className="row mt-5">
        {guitars.length &&
          guitars.map((guitar) => <Guitar key={guitar.id} guitars={guitars} guitar={guitar} cart={cart} setCart={setCart}/>)}
      </div>
    </main>
  );
};

export default GuitarCollection;
