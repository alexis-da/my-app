import { createRoot } from "react-dom/client";
import "./index.css";
import { PizzaList } from "./SeriesList.jsx";
import { Navbar } from "./Navbar.jsx";
import { Cart } from "./Cart.jsx";
import { CartProvider } from "./CartContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home.jsx";
import { Contact } from "./contact.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  </BrowserRouter>
);
