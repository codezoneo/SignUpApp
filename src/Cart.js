import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const emailId = token.split("@")[0].replace(/\./g, ""); // Remove @ and .
        const response = await fetch(
          `https://crudcrud.com/api/YOUR_CRUDCRUD_API_KEY/cart${emailId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (token) {
      fetchCartItems();
    }
  }, [token]);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
