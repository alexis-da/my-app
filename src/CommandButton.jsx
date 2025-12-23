import { useCart } from "./CartContext";

export function MonBouton({ message }) {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart(message);
    console.log(
      `Vous avez commandé une pizza ${message.name} à ${message.price}€`
    );
  };

  return <button onClick={handleClick}>Commander</button>;
}
