import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "./Navigation";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="boss">
      <Navigation />
      <br></br>
      <h4 align="center"><b>Near Old Shetty Complex, Near Shetty Multiplex, Aland Road, Kalaburgi</b></h4>
      <div className="cards">
        <Link to="/component01">
          <div className="grow">
            <img
              src="./images/dxlogo.png"
              alt="AirMax Pro"
              className=" object-cover" />
            <div className="bsk">
              <button className="bts"><span className="btcli">Click Me</span></button>
            </div>
          </div>
        </Link>
        <Link to="/component02">
          <div className="grow">
            <img
              src="./images/linix.png"
              alt="AirMax Pro"
              className="object-cover"
            />
            <div className="bsk">
              <button  className="bts"><span className="btcli">Click Me</span></button>
            </div>
          </div>
        </Link>
      </div>
      <br>
      </br>
      <h4 align="center"><b>Karnataka Government + ISO 9001-2015 Certified Institute</b></h4>
      <form className="serc" role="search">
        <input className="form-control " type="search" placeholder="Email address" aria-label="Email address" />
        <button className="btn btn-danger" type="getstart">GetStart<span className="bi bi-chevron-right"></span></button></form>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;