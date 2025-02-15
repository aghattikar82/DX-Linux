import React from "react";
import Footer from "../../component/Footer";
import Navlinix from "./Navlinix";


const Contactlinix = () => {
    return (
        <div>
            <Navlinix />
            <div>
         
                <div className="card">
                    <div className="add card-header">Office Address</div>
                    <div className="card-body">
                        <h1 className="haft">Linux Computer Training</h1>
                        <p classNameName="textt card-text">#Old Shetty Complex, Near Shetty Multiplex, Aland Road, Kalaburgi 585103</p>
                        <div className="contac"><span className="bi bi-headset phone "></span>
                            <span className="numb p-2">8088323231 ,</span>
                            <span className="numb">8088323231</span>
                        </div>
                        <div className="contactr">
                            <span className="bi bi-envelope phone  m-4"></span>
                            <span className="mail">deepakkumar4u8dx@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <diV>
                <Footer />
            </diV>
        </div>
    );
};

export default Contactlinix;