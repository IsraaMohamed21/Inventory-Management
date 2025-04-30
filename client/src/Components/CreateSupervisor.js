import { useState } from "react";
import Navebar from "./Navbar";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
const CreateSupervisor = () => {
  const navigate = useNavigate();
  const navigate2 = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handlesubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/create", { name, email, password })
      .then((res) => {
        console.log(res);
        navigate2("/EditSupervisors");
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
        <h1 style={{ color: "white" }}>Add Supervisor</h1>
        <br />
        <br />
        <br />
        {/*inputs*/}
        <label className="label">
          <p style={{ color: "white" }}> Supevisor Name :</p>
        </label>
        <input
          type="text"
          className="inputs"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label className="label">
          <p style={{ color: "white" }}> Supervisor Email: </p>
        </label>
        <input
          type="email"
          className="inputs"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label className="label">
          <p style={{ color: "white" }}> Supevisor password :</p>
        </label>
        <input
          type="text"
          className="inputs"
          onChange={(e) => setPassword(e.target.value)}
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

export default CreateSupervisor;
