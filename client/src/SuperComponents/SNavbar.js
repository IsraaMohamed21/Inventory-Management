import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
function SNavebar(props) {
  const logout = "/Login";
  const superhome = "/SuperHome";
  const sabout = "/SAbout";
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <h1 className="h2">Edara</h1>
        <NavLink to={superhome}>{props.SuperHome}</NavLink>
        <NavLink to="/createcontact">{props.Contactus}</NavLink>
        <NavLink to={sabout}>{props.About}</NavLink>
        <button className="btn" onClick={() => navigate("/login")}>
          LogOut
        </button>
      </nav>
    </>
  );
}

export default SNavebar;
