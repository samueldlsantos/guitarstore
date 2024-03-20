const Guitar = ({ guitars, guitar, setCart }) => {
  const { id, name, image, description, price } = guitar;

  const handleAddToCart = () => {
    var guitarClicked = guitars.find(guitar => guitar.id === id);

    if(guitarClicked){
      //Hace una copia del estado actual del carrito sin tener que pasar el estado por props
      setCart((prevCart) => [...prevCart, guitarClicked]);
    }
  }
  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`./public/img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button type="button" className="btn btn-dark w-100" onClick={handleAddToCart}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default Guitar;
