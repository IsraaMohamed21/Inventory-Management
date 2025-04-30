import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Navebar(props) {
  const home = "/Home";
  const about = "/About";
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <h1 className="h2">Edara</h1>
        <NavLink to={home}>{props.Home}</NavLink>
        <NavLink to="/createcontact">{props.Contactus}</NavLink>
        <NavLink to={about}>{props.About}</NavLink>
        <button className="btn" onClick={() => navigate("/login")}>
          LogOut
        </button>
      </nav>
    </>
  );
}

export default Navebar;
