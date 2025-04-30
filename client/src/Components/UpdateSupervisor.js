import { useState } from "react";
import Navebar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
const UpdateSupervisor = () => {
  const navigate = useNavigate();
  const navigate2 = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();
  function handlesubmit(event) {
    event.preventDefault();
    axios
      .put("http://localhost:4000/update/" + id, { name, email })
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

      <form className="f-edit" onSubmit={handlesubmit}>
        <h1 style={{ color: "white" }}>Update Supervisor</h1>
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

        <button className="btn2">Update</button>
        <br />
        <br />
        <br />
      </form>
    </div>
  );
};

export default UpdateSupervisor;
