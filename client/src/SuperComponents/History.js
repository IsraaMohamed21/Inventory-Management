import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SNavebar from "./SNavbar";
const History = () => {
    const navigate = useNavigate();
    const [requests, setRequests]=useState([]);
    useEffect(() =>{
        axios.get('request')
        .then((res=>{
            setRequests(res.data);
        })).catch(err =>{
            console.log(err);
        });
    },[]);
    return ( 
        <>
        <SNavebar SuperHome='Home' Contactus='Contact Us' About='About Us' profile='Profile' />
        <br />
            <button className="btn3" onClick={() => navigate(-1)}>Go Back</button>
     <div>
        <br/>
        <table className="request">
        <thead>
        <tr>
        <th>ID</th>
        <th>Sent Requests</th>
        <th>Sent Date</th>
        </tr>
        </thead>
        <tbody>
          
          {requests.map(request=>(<tr key={request.id}> <td> {request.id}</td> <td> {request.request}</td> <td> {request.date}</td>
          </tr>))}
          
          
        </tbody>
      </table>
     </div>
        </>
     );
}
 
export default History;