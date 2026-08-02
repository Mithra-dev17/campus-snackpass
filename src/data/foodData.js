import sandwich from "../assets/food/sandwich.jpg";
import pasta from "../assets/food/pasta.jpg";
import coffee from "../assets/food/coffee.jpg";
import burger from "../assets/food/burger.jpg";
const foodData = [
  {
    id: 1,
    name: "Veg Sandwich",
    category: "Snacks",
    price: 50,
    rating: 4.5,
    description: "Fresh vegetables with creamy filling",
    image: sandwich
  },

  {
    id: 2,
    name: "Pasta",
    category: "Meals",
    price: 80,
    rating: 4.7,
    description: "Italian style creamy pasta",
    image: pasta
  },

  {
    id: 3,
    name: "Cold Coffee",
    category: "Drinks",
    price: 60,
    rating: 4.6,
    description: "Chilled coffee with milk",
    image: coffee
  },

  {
    id: 4,
    name: "Burger",
    category: "Snacks",
    price: 100,
    rating: 4.8,
    description: "Loaded veggie burger",
    image: burger
  }
];

export default foodData;