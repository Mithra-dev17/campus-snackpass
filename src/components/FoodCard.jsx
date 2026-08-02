import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

function FoodCard({ food }) {

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(food);
    toast.success(`${food.name} added to cart!`);
  };

  return (

    <div className="food-card">

      <img
        className="food-image"
        src={food.image}
        alt={food.name}
      />

      <h3>{food.name}</h3>

      <p>{food.description}</p>

      <p>⭐ {food.rating}</p>

      <h3>₹{food.price}</h3>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>

    </div>

  );
}

export default FoodCard;