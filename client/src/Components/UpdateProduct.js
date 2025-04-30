import { useState, useEffect } from "react";
import Navebar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
const UpdateProduct = () => {
  const navigate = useNavigate();
  const navigate2 = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const { id } = useParams();
  function handlesubmit(event) {
    event.preventDefault();
    axios
      .put("http://localhost:4000/updateproduct/" + id, {
        name,
        description,
        stock,
      })
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

      <br />
      <br />
      <form className="f-edit2" onSubmit={handlesubmit}>
        <h1 style={{ color: "white" }}>Update Product</h1>
        <br />
        <br />
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
        <button className="btn2">Update</button>
        <br />
        <br />
        <br />
      </form>
    </div>
  );
};

export default UpdateProduct;
