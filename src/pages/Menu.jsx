import foodData from "../data/foodData";
import FoodCard from "../components/FoodCard";
import "./Menu.css";
import { useState } from "react";

function Menu() {

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");

  return (
    
    <div className="menu">

      <h1>Today's Menu 🍽️</h1>

         <div className="menu-controls">


<input

type="text"

placeholder="Search food..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


<div className="categories">


<button
  className={category === "All" ? "active-category" : ""}
  onClick={() => setCategory("All")}
>
  All
</button>


<button
  className={category === "Snacks" ? "active-category" : ""}
  onClick={() => setCategory("Snacks")}
>
  Snacks
</button>


<button
  className={category === "Meals" ? "active-category" : ""}
  onClick={() => setCategory("Meals")}
>
  Meals
</button>


<button
  className={category === "Drinks" ? "active-category" : ""}
  onClick={() => setCategory("Drinks")}
>
  Drinks
</button>


</div>


</div>
      <div className="food-container">

       {foodData
        .filter((food) =>
          food.name.toLowerCase().includes(search.toLowerCase())
        )
        .filter(
          (food) =>
            category === "All" || food.category === category
        )
        .map((food) => (
          <FoodCard
            key={food.id}
            food={food}
          />
        ))}

      </div>

    </div>
  );
}

export default Menu;