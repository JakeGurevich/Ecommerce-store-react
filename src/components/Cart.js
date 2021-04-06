import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

const api = axios.create({
  baseURL: `https://605b25cf27f0050017c06492.mockapi.io`,
});

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [deletedItem, setDeletedItem] = useState(null);
  //   const { update } = props.location.state;
  console.log(props);
  useEffect(() => {
    getCartItems();
  }, [deletedItem]);
  const getCartItems = async () => {
    let res = await api.get("/cart");
    console.log(res.data);
    setCartItems(res.data);
  };
  const deleteItem = async (item) => {
    let res = await api.delete(`/cart/${item.id}`);
    console.log(res.data);

    setDeletedItem(res.data);
    // update(res.data);
    console.log(deletedItem);
  };
  const displayCards =
    cartItems &&
    cartItems.map((p) => {
      return <Card key={p.id} n={p} style="cart" delete={deleteItem} />;
    });

  return (
    <>
      <div className="cartContainer">
        <div className="cartItemsContainer">Cart{displayCards}</div>
        <div className="total">
          <span>Total :</span>
          <button>Proceed to checkout</button>
        </div>
        <div className="btn">
          <Link to="/">Back to Products</Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
