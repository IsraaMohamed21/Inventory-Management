import SNavebar from "./SNavbar";
const SAbout = () => {
  return (
    <>
      <SNavebar SuperHome='Home' Contactus='Contact Us' About='About Us'  />
      <div className="about">
        <div className="about-section">

          <h1 className="h">About Us</h1>
        </div>

        <div className="row">
          <div className="column">
            <div className="card">
              <img src="componants/israa.jpeg" alt="israa" style={{ width: '150px', height: '150px' }} />
              <div className="container">
                <h2>Israa Mohamed</h2>
                <p className="title">Frontend Developer</p>
                <p className="parg">creates the Frontend of the Admin dashboard</p>
                <p className="parg">israa@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src="" alt="Naglaa Elabdy" style={{ width: '150px', height: '150px' }} />
              <div className="container">
                <h2>Naglaa Elabdy</h2>
                <p className="title">Backend Developer</p>
                <p className="parg">responspile for the backend</p>
                <p className="parg">Naglaa@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src="Ahmed.jpeg" alt="Ahmed" style={{ width: '150px', height: '150px' }} />
              <div className="container">
                <h2>Ahmed Ragab</h2>
                <p className="title">Frontend Developer</p>
                <p className="parg">creates the Frontend of Supervisor dashboard</p>
                <p className="parg">ahmed@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src="zeyad.jpeg" alt="Zeyad" style={{ width: '150px', height: '150px' }} />
              <div className="container">
                <h2>Zeyad Mohamed</h2>
                <p className="title">Backend Developer</p>
                <p className="parg">responspile for the backend</p>
                <p className="parg">Zeyad@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src="Abdullah.jpeg" alt="Abdullah" style={{ width: '150px', height: '150px' }} />
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
              <img src="Omar.jpeg" alt="Omar" style={{ width: '150px', height: '150px' }} />
              <div className="container">
                <h2>Omar</h2>
                <p className="title">Backend Developer</p>
                <p className="parg">responspile for the backend.</p>
                <p className="parg">omar@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SAbout;