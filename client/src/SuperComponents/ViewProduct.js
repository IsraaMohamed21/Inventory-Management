import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SNavebar from "./SNavbar";
import axios from "axios";
const ViewProduct = () => {
  const navigate = useNavigate();
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
      <div>
        <br />
        <table className="request">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Product Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                {" "}
                <td> {product.id}</td> <td> {product.name}</td>{" "}
                <td> {product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewProduct;
