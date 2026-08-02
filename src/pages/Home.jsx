import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Users, Zap } from "lucide-react";
import "./Home.css";
import hero from "../assets/hero.jpg";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}

      <section className="hero">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1>
            Campus Food,
            <br />
            Without the Waiting.
          </h1>

          <p>
            Order your favourite snacks online,
            skip long queues and collect your food
            instantly from the canteen.
          </p>

          <div className="hero-buttons">

            <Link to="/menu">
              <button className="primary-btn">
                Order Now
              </button>
            </Link>

            <Link to="/menu">
              <button className="secondary-btn">
                View Menu
              </button>
            </Link>

          </div>

        </motion.div>



        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >

          <img
            src={hero}
            alt="Campus SnackPass Hero"
          />

        </motion.div>

      </section>



      {/* Stats Section */}

      <section className="stats">

        <div className="stat-card">

          <Users size={40} />

          <h2>
            500+
          </h2>

          <p>
            Students Served
          </p>

        </div>



        <div className="stat-card">

          <Clock size={40} />

          <h2>
            15 min
          </h2>

          <p>
            Average Pickup
          </p>

        </div>



        <div className="stat-card">

          <Zap size={40} />

          <h2>
            Fast
          </h2>

          <p>
            Digital Ordering
          </p>

        </div>

      </section>



      {/* Features Section */}

      <section className="features">

        <h2>
          Why Choose Campus SnackPass?
        </h2>

        <div className="feature-grid">

          <div className="feature-card">

            <h3>
              ⚡ Fast Pickup
            </h3>

            <p>
              Skip long queues and collect your food in minutes.
            </p>

          </div>



          <div className="feature-card">

            <h3>
              📱 Digital SnackPass
            </h3>

            <p>
              Get a digital pickup pass instantly after placing your order.
            </p>

          </div>



          <div className="feature-card">

            <h3>
              🍽️ Fresh Food
            </h3>

            <p>
              Enjoy freshly prepared meals from your campus canteen.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;