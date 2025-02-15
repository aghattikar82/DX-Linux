import React from "react";
import Footer from "../../component/Footer";
import Navlinix from "./Navlinix";



const Homelinix = () => {
    return (
        <div classNameName="justify-center items-center h-screen">
            <Navlinix />
            <div>
                <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/linix01.jpg" className="caur" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/linix06.jpeg" className="caur"  alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/linix004.jpg" className="caur"  alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/linix04.jpeg" className="caur"  alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/linix05.jpeg" className="caur"  alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="homefootlix">
                <Footer />
            </div>
        </div>
    );
};

export default Homelinix;