import SNavebar from "./SNavbar";
import SContent from "./SContent";
import Supersidebar from "./Supersidebar";
const SuperHome = () => {
    return ( 
        <>
        <div style={{ backgroundColor: "#fdf8ec" }}>
        <SNavebar SuperHome='Home' Contactus='Contact Us' About='About Us' />
      <p> <SContent></SContent><Supersidebar/></p>
      </div>
        </>
     );
}
 
export default SuperHome;