import React from "react";
import { useNavigate } from "react-router-dom";
import Navebar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Editwarehouses() {
  const navigate = useNavigate();
  const [warehouse, setWarehouse] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/warehouse/")
      .then((res) => setWarehouse(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:4000/warehouse/" + id);
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
          to="/createwarehouse"
          className="btn4"
        >
          Add +
        </Link>
        <br />
        <br />
        <table className="request">
          <tr>
            <th>ID</th>
            <th>Warehouse Name</th>
            <th>Warehouse Location</th>
            <th style={{ paddingLeft: "11%" }}>Action</th>
          </tr>
          <tbody>
            {warehouse.map((data, i) => (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.location}</td>
                <td>
                  <Link
                    to={`/updatewarehouse/${data.id}`}
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
                      marginLeft: "30%",
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

export default Editwarehouses;
