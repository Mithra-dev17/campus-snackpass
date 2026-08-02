import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./SnackPass.css";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SnackPass() {

    const navigate = useNavigate();
  const { cart } = useContext(CartContext);


  const total = cart.reduce(
    (sum,item)=>sum + item.price * item.quantity,
    0
  );

   const [orderId] = useState(() => Math.floor(1000 + Math.random() * 9000));
  


  return (

    <div className="snackpass-page">


      <div className="snackpass-card">


        <h1>
          🎟️ Campus SnackPass
        </h1>


        <p>
          Order ID: #{orderId}
        </p>


        <p>
          Pickup Counter: Canteen 1
        </p>

        <div className="qr-box">

  <QRCodeCanvas
    value={`Campus SnackPass Order ${orderId}`}
    size={150}
  />

  <p>
    Show this QR at pickup counter
  </p>

</div>


        <p>
          Pickup Time: 15 Minutes
        </p>


        <hr />


        <h2>
          Order Summary
        </h2>


        {
          cart.map((item)=>(

            <div 
              className="snack-item"
              key={item.id}
            >

              <span>
                {item.name} x {item.quantity}
              </span>


              <span>
                ₹{item.price * item.quantity}
              </span>


            </div>

          ))
        }


        <hr />


        <h2>
          Total: ₹{total}
        </h2>


       <button
 onClick={()=>navigate("/success")}
>
 Confirm Order ✅
</button>


      </div>


    </div>

  );

}


export default SnackPass;