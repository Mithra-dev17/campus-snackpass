import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useContext(CartContext);


  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  return (

    <div className="cart-page">

      <div className="cart-box">

        <h1>
          Your Cart 🛒
        </h1>


        {
          cart.length === 0 ? (

            <p>
              Your cart is empty
            </p>

          ) : (

            cart.map((item) => (

              <div className="cart-item" key={item.id}>


                <img
                  src={item.image}
                  alt={item.name}
                />


                <div>

                  <h3>
                    {item.name}
                  </h3>


                  <p>
                    ₹{item.price}
                  </p>


                  <button onClick={() => decreaseQuantity(item.id)}>
                    -
                  </button>


                  <span>
                    {item.quantity}
                  </span>


                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>


                  <br />


                  <button
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>


                </div>


              </div>

            ))

          )
        }


        <hr />


        <h2>
          Total: ₹{total}
        </h2>


        <Link to="/snackpass">

          <button className="checkout-btn">
            Generate SnackPass 🎟️
          </button>

        </Link>


      </div>

    </div>

  );

}

export default Cart;