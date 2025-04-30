import Content from "./Content";
import Sidebar from "./Sidebar";
import Navebar from "./Navbar";
const Home = (props) => {
  return (
    <>
      <div style={{ backgroundColor: "#fcf9f1" }}>
        <Navebar Home="Home" Contactus="Contact Us" About="About Us" />
        <p>
          {" "}
          <Content></Content>
          <Sidebar
            EditWarehouses="Edit Warehouses"
            WarehousesList="Warehouses and Products"
            SupervisorsRequests="Supervisors Requests"
          />
        </p>
      </div>
    </>
  );
};

export default Home;
