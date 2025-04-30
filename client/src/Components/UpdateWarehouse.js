import { useState } from "react";
import Navebar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
const UpdateWarehouse = () => {
  const navigate = useNavigate();
  const navigate2 = useNavigate();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const { id } = useParams();
  function handlesubmit(event) {
    event.preventDefault();
    axios
      .put("http://localhost:4000/updatewarehouse/" + id, { name, location })
      .then((res) => {
        console.log(res);
        navigate2("/EditWarehouses");
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

      <form className="f-edit" onSubmit={handlesubmit}>
        <h1 style={{ color: "white" }}>Update Warehouse</h1>
        <br />
        <br />
        <br />
        {/*inputs*/}
        <label className="label">
          <p style={{ color: "white" }}> Warehouse Name :</p>
        </label>
        <input
          type="text"
          className="inputs"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label className="label">
          <p style={{ color: "white" }}> Warehouse Location: </p>
        </label>
        <input
          type="text"
          className="inputs"
          onChange={(e) => setLocation(e.target.value)}
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

export default UpdateWarehouse;
