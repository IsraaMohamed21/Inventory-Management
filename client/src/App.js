import "./App.css";
/*Admin*/
import { Routes, Route } from "react-router-dom";
import ItemList from "./Components/ItemList";
import Editwarehouses from "./Components/Editwarehouses";
import EditSupervisors from "./Components/EditSupervisors";
import EditProducts from "./Components/EditProducts";
import Requests from "./Components/Requests";
import Contactus from "./Components/Contactus";
import Home from "./Components/Home";
import About from "./Components/About";
import Register from "./Components/Register";
import { Login } from "./Components/Login";
import CreateSupervisor from "./Components/CreateSupervisor";
import UpdateSupervisor from "./Components/UpdateSupervisor";
import CreateWarehouse from "./Components/CreateWarehouse";
import UpdateWarehouse from "./Components/UpdateWarehouse";
import CreateProduct from "./Components/CreateProduct";
import UpdateProduct from "./Components/UpdateProduct";
/*SUPERVISOR*/
import SuperHome from "./SuperComponents/SuperHome";
import History from "./SuperComponents/History";
import SAbout from "./SuperComponents/SAbout";
import SRequest from "./SuperComponents/SRequest";
import ViewProduct from "./SuperComponents/ViewProduct";
import SContactus from "./SuperComponents/SContactus";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home editwarehouses="Edit Warehouses"></Home>} />
        
        {/*Admin*/}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="Home" element={<Home editwarehouses="Edit Warehouses"></Home>}></Route>
        <Route path="About" element={<About></About>}></Route>
        <Route path="/createcontact" element={<Contactus></Contactus>}></Route>
        <Route path="Editwarehouses" element={<Editwarehouses />}></Route>
        <Route path="EditSupervisors" element={<EditSupervisors></EditSupervisors>}></Route>
        <Route path="EditProducts" element={<EditProducts></EditProducts>}></Route>
        <Route path="ItemList" element={<ItemList></ItemList>}></Route>
        <Route path="Requests" element={<Requests></Requests>}></Route>
        <Route path="/create" element={<CreateSupervisor></CreateSupervisor>}></Route>
        <Route path="/update/:id" element={<UpdateSupervisor></UpdateSupervisor>}></Route>
        <Route path="/createwarehouse" element={<CreateWarehouse></CreateWarehouse>}></Route>
        <Route path="/updatewarehouse/:id" element={<UpdateWarehouse></UpdateWarehouse>}></Route>
        <Route path="/createproduct" element={<CreateProduct></CreateProduct>}></Route>
        <Route path="/updateproduct/:id" element={<UpdateProduct></UpdateProduct>}></Route>
        
        {/*SUPERVISOR*/}
        <Route path="SuperHome" element={<SuperHome></SuperHome>}></Route>
        <Route path="SAbout" element={<SAbout></SAbout>}></Route>
        <Route path="/createcontact" element={<SContactus></SContactus>}></Route>
        <Route path="History" element={<History></History>}></Route>
        <Route path="/createrequest" element={<SRequest></SRequest>}></Route>
        <Route path="ViewProduct" element={<ViewProduct></ViewProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
