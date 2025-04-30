import Navebar from "./Navbar";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function ItemList() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/proware")
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
              <th>product</th>
              <th>Stock</th>
              <th>Warehouse</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((w) => (
              <tr key={w.wid}>
                <td> {w.pname}</td> <td> {w.stock}</td>
                <td> {w.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ItemList;
