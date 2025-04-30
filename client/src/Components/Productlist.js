import Navebar from "./Navbar";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Productlist() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("Products")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
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
      <div>
        <br />
        <table className="request">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Description</th>
              <th>Product Stock</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((w) => (
              <tr key={w.id}>
                <td> {w.id}</td>
                <td> {w.name}</td>
                <td> {w.description}</td>
                <td> {w.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Productlist;
