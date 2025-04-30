import { useState } from "react";
import Navebar from "./Navbar";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
const CreateProduct = () => {
  const navigate = useNavigate();
  const navigate2 = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  function handlesubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/createproduct", { name, description, stock })
      .then((res) => {
        console.log(res);
        navigate2("/EditProducts");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <Navebar
        Home="Home"
        Contactus="Contact Us"
        About="About Us"
        profile="Profile"
      />
      <br />
      <button className="btn3" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <br />
      <br />
      <form className="f-edit2" onSubmit={handlesubmit}>
        <h1 style={{ color: "white" }}>Add Product</h1>
        <br />
        <br />
        <br />
        {/*inputs*/}
        <label className="label">
          <p style={{ color: "white" }}> Product Name :</p>
        </label>
        <input
          type="text"
          className="inputs"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label className="label">
          <p style={{ color: "white" }}> Product Description: </p>
        </label>
        <input
          type="text"
          className="inputs"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        <label className="label">
          <p style={{ color: "white" }}> Product Stock: </p>
        </label>
        <input
          type="text"
          className="inputs"
          onChange={(e) => setStock(e.target.value)}
        />
        <br />
        <br />
        <button className="btn2">Submit</button>
        <br />
        <br />
        <br />
      </form>
    </div>
  );
};

export default CreateProduct;
