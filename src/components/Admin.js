import React, { useState, useEffect } from "react";

const Admin = (props) => {
  const [name, setName] = useState("Phone");
  const [price, setPrice] = useState("200");
  const [img, setImg] = useState("");
  return (
    <>
      <label>Name</label>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>

      <label>Price</label>
      <input type="text" onChange={(e) => setPrice(e.target.value)}></input>
      <label>Img</label>
      <input type="text" onChange={(e) => setImg(e.target.value)}></input>
      <div className="admin">{console.log(props)}Admin Panel</div>
      <button onClick={() => props.back(false)}>Back to products</button>
      <button onClick={() => props.add({ name, price, img })}>
        Add product
      </button>
    </>
  );
};
export default Admin;
