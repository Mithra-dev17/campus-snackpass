import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import SnackPass from "./pages/SnackPass";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/snackpass" element={<SnackPass />} />
        <Route path="/success" element={<OrderSuccess />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;