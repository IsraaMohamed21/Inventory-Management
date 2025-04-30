import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import axios from "axios";
import SNavebar from "./SNavbar";
const SRequest = () => {
  const navigate = useNavigate();
  const navigate2 = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [request, setRequest] = useState("");

  function handlesubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/createrequest", {
        name,
        email,
        quantity,
        request,
      })
      .then((res) => {
        console.log(res);
        navigate2("/SuperHome");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <SNavebar
        SuperHome="Home"
        Contactus="Contact Us"
        About="About Us"
        profile="Profile"
      />
      <br />
      <button className="btn3" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <br />
      <br></br>
      <form className="f-style2" onSubmit={handlesubmit}>
        <h1 style={{ color: "white" }}>Make Request</h1>
        <br />
        <br />
        <h1 className="label">Name :</h1>
        <input
          type="text"
          className="phone"
          placeholder="e.g..name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <h1 className="label">Email :</h1>
        <input
          type="email"
          className="phone"
          placeholder="name@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <h1 className="label">Required quantity :</h1>
        <input
          type="number"
          className="phone"
          placeholder=""
          onChange={(e) => setQuantity(e.target.value)}
        />
        <br />
        <br />

        <h1 className="label">Please full fill your Request</h1>
        <textarea
          onChange={(e) => setRequest(e.target.value)}
          className="phone"
          name="subject"
          placeholder="Write something.."
          style={{ height: "150px" }}
        ></textarea>
        <br />
        <br />
        <input type="Submit" className="btn2" />
        <br />
        <br />
      </form>
    </>
  );
};

export default SRequest;
