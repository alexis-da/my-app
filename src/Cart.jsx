import { useCart } from "./CartContext";

export function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div>
        <h2>Panier</h2>
        <p>Votre panier est vide.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Panier</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.name}>
            <span>{item.name}</span> - {item.price}€
            <div>
              Quantité:
              <button
                onClick={() => updateQuantity(item.name, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.name, item.quantity + 1)}
              >
                +
              </button>
              <button onClick={() => removeFromCart(item.name)}>
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <strong>Total: {totalPrice.toFixed(2)}€</strong>
      </div>
      <button onClick={clearCart}>Finaliser l'achat</button>
    </div>
  );
}
