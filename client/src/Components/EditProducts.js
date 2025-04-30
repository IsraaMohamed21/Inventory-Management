import React from "react";
import { useNavigate } from "react-router-dom";
import Navebar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function EditProducts() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/products/")
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:4000/products/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
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
      <div>
        <Link
          style={{ textDecoration: "none" }}
          to="/createproduct"
          className="btn4"
        >
          Add +
        </Link>
        <br />
        <br />
        <table className="request">
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Product Stock</th>
            <th style={{ paddingLeft: "10%" }}>Action</th>
          </tr>
          <tbody>
            {product.map((data, i) => (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.stock}</td>

                <td>
                  <Link
                    to={`/updateproduct/${data.id}`}
                    style={{
                      backgroundColor: "#04AA6D",
                      borderRadius: "12px",
                      color: "whitesmoke",
                      border: "2px solid rgb(22, 21, 21)",
                      padding: "15px 15px",
                      display: "inline-block",
                      fontSize: "20px",
                      transitionDuration: "0.4s",
                      marginLeft: "10%",
                      textDecoration: "none",
                    }}
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e) => handleDelete(data.id)}
                    style={{
                      backgroundColor: "red",
                      borderRadius: "12px",
                      color: "whitesmoke",
                      border: "2px solid rgb(22, 21, 21)",
                      padding: "15px 15px",
                      display: "inline-block",
                      fontSize: "20px",
                      transitionDuration: "0.4s",
                      marginLeft: "25%",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default EditProducts;
