import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./OrderSuccess.css";


function OrderSuccess() {

  return (

    <div className="success-page">


      <motion.div

        className="success-card"

        initial={{scale:0.5, opacity:0}}

        animate={{scale:1, opacity:1}}

        transition={{duration:0.5}}

      >


        <h1>
          🎉 Order Confirmed!
        </h1>


        <p>
          Your food order has been placed successfully.
        </p>


        <h3>
          Pickup Location
        </h3>


        <p>
          🍽️ Campus Canteen Counter 1
        </p>


        <p>
          ⏰ Ready in 15 minutes
        </p>



        <Link to="/">

          <button className="home-btn">
            Back to Home 🏠
          </button>

        </Link>


      </motion.div>


    </div>

  );

}


export default OrderSuccess;