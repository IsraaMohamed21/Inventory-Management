import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/register", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/login");
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <br />
      <form className="f-style" onSubmit={handleSubmit}>
        <h1 style={{ color: "white" }}>SignUp</h1>
        <br />
        <br />
        <br />
        <label className="label">Enter UserName:</label>
        <br />
        <input
          className="inputs"
          label="Enter UserName :"
          type="text"
          placeholder="e.g..name"
          required
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
        <br />
        <br />
        <label className="label">Enter your Email:</label>
        <br />
        <input
          className="inputs"
          label="Enter your Email :"
          type="email"
          placeholder="name@gmail.com"
          required
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <br />
        <br />
        <label className="label">Enter Strong Password:</label>
        <br />
        <input
          className="inputs"
          label="Password :"
          type="password"
          placeholder="enter your password"
          required
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <br />
        <br />
        <br />
        <br />
        <button className="btn2">SignUp</button>
        <br />
        <br />
        <Link to="/login" style={{ color: "#04AA6D", textDecoration: "none" }}>
          Login
        </Link>
      </form>
      <br />
    </>
  );
};

export default Register;
