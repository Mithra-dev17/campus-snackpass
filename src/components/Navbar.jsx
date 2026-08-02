import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";


function Navbar() {

  const location = useLocation();

  const { cart } = useContext(CartContext);


  return (

    <nav className="navbar">


      <h2 className="logo">
        Campus SnackPass 🍔
      </h2>



      <div className="nav-links">


        <Link 
          className={location.pathname === "/" ? "active" : ""}
          to="/"
        >
          Home
        </Link>


        <Link
          className={location.pathname === "/menu" ? "active" : ""}
          to="/menu"
        >
          Menu
        </Link>


        <Link
          className={location.pathname === "/cart" ? "active" : ""}
          to="/cart"
        >

          Cart 🛒

          {
            cart.length > 0 &&
            <span className="cart-count">
              {cart.length}
            </span>
          }

        </Link>


      </div>


    </nav>

  );

}


export default Navbar;