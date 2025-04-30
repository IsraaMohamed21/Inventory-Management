import Navebar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
const Requests = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("request")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:4000/request/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:4000/request/${id}`, {
        is_deleted: true,
      });
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === id) {
            return { ...post, is_deleted: true };
          } else {
            return post;
          }
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  const filteredPosts = posts.filter((post) => !post.is_deleted);
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
      <br /> <br />
      <table className="request">
        <thead>
          <tr>
            <th>ID</th>
            <th>Supervisor Request</th>
            <th>Required quantity</th>
            <th>Approve</th>
            <th>Decline</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((data, i) => (
            <tr key={data.id}>
              <td> {data.id}</td>
              <td>{data.request}</td>
              <td>{data.quantity}</td>
              <td>
                <button
                  onClick={(e) => handleApprove(data.id)}
                  style={{
                    backgroundColor: "#04AA6D",
                    borderRadius: "12px",
                    color: "whitesmoke",
                    border: "2px solid rgb(22, 21, 21)",
                    padding: "15px 15px",
                    display: "inline-block",
                    fontSize: "20px",
                    transitionDuration: "0.4s",
                    marginLeft: "7%",
                  }}
                >
                  Approve
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => handleDelete(data.id)}
                  style={{
                    backgroundColor: "Red",
                    borderRadius: "12px",
                    color: "whitesmoke",
                    border: "2px solid rgb(22, 21, 21)",
                    padding: "15px 15px",
                    display: "inline-block",
                    fontSize: "20px",
                    transitionDuration: "0.4s",
                    marginLeft: "7%",
                  }}
                >
                  Decline
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Requests;
