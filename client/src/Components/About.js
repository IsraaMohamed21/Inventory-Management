import Navebar from "./Navbar";
import israa from "../assets/israa.jpg";
import ahmed from "../assets/Ahmed.jpg";
import Abdullah from "../assets/Abdullah.jpg";
import zeyad from "../assets/zeyad.jpg";
import omar from "../assets/Omar.jpg";

const About = () => {
  return (
    <>
      <Navebar
        Home="Home"
        Contactus="Contact Us"
        About="About Us"
        profile="Profile"
      />
      <div className="about">
        <div className="about-section">
          <h1 className="h">About Us</h1>
        </div>

        <div className="row">
          <div className="column">
            <div className="card">
              <img
                src={israa}
                alt="israa"
                style={{  height: "150px" }}
              />
              <div className="container">
                <h2>Israa Mohamed</h2>
                <p className="title">Frontend Developer</p>
                <p className="parg">
                  creates the Frontend of the Admin dashboard
                </p>
                <p className="parg">israa@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img
                src={ahmed}
                alt="Ahmed"
                style={{  height: "150px" }}
              />
              <div className="container">
                <h2>Ahmed Ragab</h2>
                <p className="title">Frontend Developer</p>
                <p className="parg">
                  creates the Frontend of Supervisor dashboard
                </p>
                <p className="parg">ahmed@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img
                src={zeyad}
                alt="Zeyad"
                style={{  height: "150px" }}
              />
              <div className="container">
                <h2>Zeyad Mohamed</h2>
                <p className="title">Backend Developer</p>
                <p className="parg">backend </p>
                <p className="parg">Zeyad@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img
                src={Abdullah}
                alt="Abdullah"
                style={{  height: "150px" }}
              />
              <div className="container">
                <h2>Abdullah Mamdouh</h2>
                <p className="title">DataBase Developer</p>
                <p className="parg">creates the DataBase.</p>
                <p className="parg">Abdullah@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img
                src={omar}
                alt="Omar"
                style={{  height: "150px" }}
              />
              <div className="container">
                <h2>Omar</h2>
                <p className="title">Backend Developer</p>
                <p className="parg">backend.</p>
                <p className="parg">omar@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
