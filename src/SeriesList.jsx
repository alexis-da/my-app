import { MonBouton } from "./CommandButton";

export function PizzaList() {
  return (
    <section id="content">
      <div className="cart">
        <h2>Margherita</h2>
        <img
          src="https://png.pngtree.com/png-clipart/20250107/original/pngtree-top-view-of-a-margherita-pizza-png-image_18848224.png"
          alt="Margherita"
        />
        <div id="buy">
          <p>8€</p>
          <MonBouton message={{ name: "Margherita", price: "8" }}></MonBouton>
        </div>
      </div>
      <div className="cart">
        <h2>4 fromages</h2>
        <img
          src="https://pizza-korner.fr/wp-content/uploads/2023/12/pizza-4-fromages-1-1024x1024.png"
          alt="4 fromages"
        />
        <div id="buy">
          <p>10€</p>
          <MonBouton message={{ name: "4 fromages", price: "10" }}></MonBouton>
        </div>
      </div>
      <div className="cart">
        <h2>Reine</h2>
        <img
          src="https://www.dominos.fr/media/kyrgf4p1/pizza-reine.png"
          alt="Reine"
        />
        <div id="buy">
          <p>9€</p>
          <MonBouton message={{ name: "Calzone", price: "8.5" }}></MonBouton>
        </div>
      </div>
    </section>
  );
}
