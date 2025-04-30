import { Link } from "react-router-dom";
const Sidebar = (props) => {
  const list = "/ItemList";
  const editwarehouses = "/Editwarehouses";
  const editProducts = "/EditProducts";
  const editsupervisors = "/EditSupervisors";
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link
              to={editwarehouses}
              style={{ textDecoration: "none", color: "white" }}
            >
              {props.EditWarehouses}
            </Link>
          </li>
          <li>
            <Link
              to={editProducts}
              style={{ textDecoration: "none", color: "white" }}
            >
              Edit Products
            </Link>
          </li>
          <li>
            <Link
              to={editsupervisors}
              style={{ textDecoration: "none", color: "white" }}
            >
              Edit Supervisors
            </Link>
          </li>
          <li>
            <Link to={list} style={{ textDecoration: "none", color: "white" }}>
              {props.WarehousesList}
            </Link>
          </li>
          <li>
            <Link
              to="/Requests"
              style={{ textDecoration: "none", color: "white" }}
            >
              {props.SupervisorsRequests}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
