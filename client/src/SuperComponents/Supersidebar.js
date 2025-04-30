import { Link } from "react-router-dom";
const Sidebar = (props) => {
  const ViewProduct = "/ViewProduct";
  const History = "/History";
  return (
    <>
      <div className="SuperSidebar">
        <ul>
          <li>
            <Link
              to={ViewProduct}
              style={{ textDecoration: "none", color: "white" }}
            >
              View Product
            </Link>
          </li>
          <li>
            <Link
              to={History}
              style={{ textDecoration: "none", color: "white" }}
            >
              Requests History
            </Link>
          </li>
          <li>
            <Link
              to="/createrequest"
              style={{ textDecoration: "none", color: "white" }}
            >
              Make Request
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
