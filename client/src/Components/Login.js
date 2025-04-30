import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import validation from "./loginvalidation";
import axios from "axios";

let ID_Admin, ID_SUPER;
function Login() {
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });
  const email = values.email;
  const password = values.password;
  const navigate = useNavigate();
  const [errors, seterror] = useState({});
  const handleInput = (e) => {
    setvalues((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };

  function handle(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/login", { email, password })
      .then((res) => {
        console.log(res);
        if (res.data.Login) {
          navigate("/SuperHome");
        } else {
          window.alert("invalid email or password");
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <div className="loginContiner">
        <br />
        <br />
        <br />
        <form className="f-style" action="" onSubmit={handle}>
          <div className="loginForm">
            <h1 style={{ color: "white" }}>LOGIN</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <label className="label" htmlFor="email">
              Email
            </label>
            <br />
            <input
              type="email"
              placeholder="Enter Email"
              onChange={handleInput}
              name="email"
            />
            <br />
            <br />
            {errors.email && (
              <span className="text-danger"> {errors.email}</span>
            )}
          </div>
          <div className="loginForm">
            <label className="label" htmlFor="password">
              Password
            </label>
            <br />
            <input
              type="password"
              onChange={handleInput}
              placeholder="Enter Password"
              name="password"
            />
            <br />
            <br />
            {errors.password && (
              <span className="text-danger"> {errors.password}</span>
            )}
          </div>
          <br />
          <br />
          <br />
          <button className="btn2" type="submit" value="login">
            Login
          </button>
          <br></br>
          <br />
          <label style={{ color: "white" }}>Dont't have account? </label>
          <Link
            to="/register"
            style={{ color: "#04AA6D", textDecoration: "none" }}
          >
            SignUp
          </Link>
        </form>
      </div>
    </div>
  );
}

export { Login, ID_Admin, ID_SUPER };
