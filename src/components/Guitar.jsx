import { useMemo } from "react";
const Guitar = ({ guitars, guitar, cart, setCart }) => {
  const { id, name, image, description, price } = guitar;

  const handleAddToCart = (item) => {
    var guitarExists = cart.find((guitar) => guitar.id === item.id);

    if (guitarExists) {
      guitarExists.quantity += 1;

      const newCart = cart.map((item) =>
        item.id === guitarExists.id ? guitarExists : item
      );

      setCart(newCart);
    } else {
      //Hace una copia del estado actual del carrito sin tener que pasar el estado por props
      item.quantity = 1;
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  const guitarExists = useMemo(() => {
    var guitarExists = cart.find((guitar) => guitar.id === id);
    if (guitarExists) return true;
    return false;
  }, [cart]);

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`/img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        {guitarExists ? (
          <button
          disabled
          type="button"
          className="btn btn-dark w-100"
        >
          En el Carrito
        </button>
        ) : (
          <button
            type="button"
            className="btn btn-dark w-100"
            onClick={() => handleAddToCart(guitar)}
          >
            Agregar al Carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default Guitar;
