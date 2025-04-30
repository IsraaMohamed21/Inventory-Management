import SNavebar from "./SNavbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import axios from "axios";
const SContactus = () => {
  const history = useNavigate();
  const navigate2 = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [problem, setProblem] = useState("");

  function handlesubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/createcontact", {
        name,
        email,
        number,
        problem,
      })
      .then((res) => {
        console.log(res);
        navigate2("/SuperHome");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <SNavebar SuperHome="Home" Contactus="Contact Us" About="About Us" />
      <br />
      <button className="btn3" onClick={() => history(-1)}>
        Go Back
      </button>
      <form className="f-style2" onSubmit={handlesubmit}>
        <h1 style={{ color: "white" }}>Contact US</h1>
        <br />
        <br />
        <h1 className="label"> Name :</h1>
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
        <h1 className="label">Phone Number :</h1>
        <input
          onChange={(e) => setNumber(e.target.value)}
          className="phone"
          label="Enter Phone Number  "
          id="phone"
          name="phone"
          placeholder="01234567891"
          pattern="[0-2]{2}[1-5]{1}[0-9]{8}"
          required
        />
        <br />
        <br />
        <h1 className="label">What would you like to discus?</h1>
        <textarea
          onChange={(e) => setProblem(e.target.value)}
          className="phone"
          name="subject"
          placeholder="Write something.."
          style={{ height: "200px" }}
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

export default SContactus;
