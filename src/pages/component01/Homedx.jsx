import React from "react";
import Navadx from "./Navadx";
import Footer from "../../component/Footer";



const Homedx = () => {
    return (
        <div classNameName="justify-center items-center h-screen">
            <Navadx />
            <div>
                <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/img01.jpeg" className="caur" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/img00.jpeg" className="caur"  alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/img02.jpg" className="caur"  alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/img03.jpeg" className="caur"  alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/img00.jpeg" className="caur"  alt="..."/>
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
            <div className="homefoot">
                <Footer />
            </div>
        </div>
    );
};

export default Homedx;