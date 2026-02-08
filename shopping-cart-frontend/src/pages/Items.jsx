import { useEffect, useState } from "react";
import api from "../services/api";

export default function Items() {
  const [items, setItems] = useState([]);
  const [toast, setToast] = useState("");

  useEffect(() => {
    api.get("/items").then((res) => setItems(res.data));
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2000);
  };

  const addToCart = async (itemId) => {
    await api.post("/carts", { itemId });
    showToast("Item added to cart");
  };

  const checkout = async () => {
  try {
    await api.post("/orders");
    showToast("Order successful");
  } catch (err) {
    showToast("Cart is empty. Add items before checkout.");
  }
};


  const showCart = async () => {
    const res = await api.get("/carts");
    const items = res.data[0]?.items || [];

    if (items.length === 0) {
      showToast("Cart is empty");
      return;
    }

    // Count quantities
    const counts = {};
    items.forEach((item) => {
      counts[item.name] = (counts[item.name] || 0) + 1;
    });

    const summary = Object.entries(counts)
      .map(([name, qty]) => `${name} x${qty}`)
      .join(", ");

    showToast(`Cart: ${summary}`);
  };

  const showOrders = async () => {
    const res = await api.get("/orders");

    if (res.data.length === 0) {
      showToast("No orders yet");
      return;
    }

    const latestOrder = res.data[res.data.length - 1];
    const items = latestOrder.items || [];

    const counts = {};
    items.forEach((item) => {
      counts[item.name] = (counts[item.name] || 0) + 1;
    });

    const summary = Object.entries(counts)
      .map(([name, qty]) => `${name} x${qty}`)
      .join(", ");

    showToast(`Last Order: ${summary}`);
  };

  return (
    <div>
      <div className="top-bar">
        <button onClick={checkout}>Checkout</button>
        <button onClick={showCart}>Cart</button>
        <button onClick={showOrders}>Order History</button>
      </div>

      <div className="items-container">
        <h2>Items</h2>
        <ul className="items-list">
          {items.map((item) => (
            <li key={item._id} onClick={() => addToCart(item._id)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
