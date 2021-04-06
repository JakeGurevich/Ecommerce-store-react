import React, { useState, useEffect } from "react";

import axios from "axios";
import Card from "./Card";
import DisplayItem from "./DisplayItem";
import Admin from "./Admin";
import Header from "./Header";
import Cart from "./Cart";
const api = axios.create({
  baseURL: `https://605b25cf27f0050017c06492.mockapi.io`,
});
const Display = () => {
  const [products, setProducts] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [newProducts, setNewProduct] = useState([]);
  const [deletedProducts, setDeletedProducts] = useState([]);
  const [updateCart, setUpdateCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getProducts();
    getCart();
  }, [newProducts, deletedProducts, updateCart]);
  const getProducts = async () => {
    let res = await api.get("/items");
    console.log(res.data);
    setProducts(res.data);
  };

  const getCart = async () => {
    let res = await api.get("/cart");
    console.log(res.data);
    setCartItems(res.data);
  };
  const deleteProduct = async () => {
    const last = products[products.length - 1];
    console.log(last.id);
    let res = await api.delete(`/items/${last.id}`);
    console.log(res.data);
    console.log(newProducts);
    setDeletedProducts([...deletedProducts, res.data]);
    console.log(deletedProducts);
  };
  const addToCart = async (p) => {
    console.log(p);
    let res = await api.post("/cart", p);
    console.log(res.data);
    setUpdateCart(p);
  };
  const displayCards =
    products &&
    products.map((p) => {
      return <Card key={p.id} n={p} add={addToCart} />;
    });

  const addProduct = async (p) => {
    console.log(p);

    const obj = {
      category: p.category,
      name: p.name,
      price: p.price,
      img: p.img,
    };
    let res = await api.post("/items", obj);
    console.log(res.data);
    setNewProduct([...newProducts, obj]);
    // getProducts();
  };

  return showAdmin ? (
    <Admin
      add={addProduct}
      delete={deleteProduct}
      list={deletedProducts}
      back={setShowAdmin}
    />
  ) : (
    <div className="App">
      <Header inCart={cartItems.length} update={setUpdateCart} />
      Products:
      <div className="wrap">{displayCards}</div>
      <button onClick={() => setShowAdmin(!showAdmin)}>
        {showAdmin ? "Back to products" : "Show Admin"}
      </button>
    </div>
  );
};

export default Display;
