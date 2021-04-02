import React, { useState, useEffect } from "react";

import axios from "axios";
import Card from "./Card";
import DisplayItem from "./DisplayItem";
import Admin from "./Admin";
const api = axios.create({
  baseURL: `https://605b25cf27f0050017c06492.mockapi.io`,
});
const Display = () => {
  const [products, setProducts] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);

  const getProducts = async () => {
    let res = await api.get("/items");
    console.log(res.data);
    setProducts(res.data);
  };
  const displayCards =
    products &&
    products.map((p) => {
      return <Card key={p.id} n={p} />;
    });

  const addProduct = async (p) => {
    console.log(p);
    const obj = { name: p.name, price: p.price, img: p.img };
    let res = await api.post("/items", obj);
    console.log(res.data);
    getProducts();
  };
  <Admin p={addProduct} />;
  useEffect(() => {
    getProducts();
  }, []);

  return showAdmin ? (
    <Admin add={addProduct} back={setShowAdmin} />
  ) : (
    <div className="App">
      Products:
      <div className="wrap">{displayCards}</div>
      <button onClick={() => setShowAdmin(!showAdmin)}>
        {showAdmin ? "Back to products" : "Show Admin"}
      </button>
    </div>
  );
};

export default Display;
