import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

export function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/cart">Panier ({totalItems} articles)</Link>
    </nav>
  );
}
