import React, { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
import Card from "./components/Card";
const api = axios.create({
  baseURL: `https://605b25cf27f0050017c06492.mockapi.io`,
});
const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let res = await api.get("/items");
    setProducts({ products: res.data });
    console.log(res.data);
  };

  const addProduct = async (p) => {
    let res = await api.post("/items", { id: 9, name: "Phone", price: "200" });
    console.log(res);
    this.getProducts();
  };
  useEffect(() => {
    getProducts();
  });

  return (
    <div className="App">
      Products:
      <div className="wrap">
        {products &&
          products.map((p) => {
            return <Card key={p.id} n={p} />;
          })}
      </div>
      <button onClick={addProduct}>Add product</button>
    </div>
  );
};

export default App;
