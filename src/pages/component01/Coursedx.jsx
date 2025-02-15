import React from "react";
import Navadx from "./Navadx";
import Footer from "../../component/Footer";


const Coursedx = () => {
    return (
        <div>
            <Navadx />
            <br>
            </br>

            <div className="cad01">
                <div className="bond ">
                    <span className="enters">No 1 in Chip - Level Training</span>
                    <p className="suber"> Learn All Types of Mobile Repairing </p>
                    <div className="pads">
                        <div className="dayes">
                            <span className="changer"><span className="free">FREE DEMO </span><p className="engg">New Batches Every Monday</p></span>
                            <span className="discount">
                                <span>30% Discount for Boy's</span><br />
                                <span>50% Discount for Girl's</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cadrss">
                <div class="courses card">
                    <span class="adds">Mobile Training</span>
                    <div class="card-body">
                        <img src="images/images29.jpeg" height="180" width="310" />
                        <p class="card-text">
                            <div class="cours">
                                <span>90% Practical Training</span>
                                <span>100% IC Repair Traning</span>
                                <span>Life Time Support</span>
                            </div>
                        </p>
                    </div>
                    <a class="btn btn-outline-success bi bi-person" href="/userreg">
                        <span class="now">Register Now</span>
                    </a>
                </div>
                <div class="courses card">
                    <span class="adds">Smart Phone Training</span>
                    <div class="card-body">
                        <img src="images/mobile-02.jpg" height="180" width="300" />
                        <p class="card-text"><div class="cours">
                            <span>90% Practical Training</span>
                            <span>100% Successfull Result</span>
                            <span>Softwer Training</span>
                        </div>
                        </p>
                    </div>
                    <a class="btn btn-outline-success bi bi-person" href="/userreg">
                        <span class="now">Register Now</span>
                    </a>
                </div>
                <div class="courses card">
                    <span class="adds">LAPTOP Repair Training</span>
                    <div class="card-body">
                        <img src="images/mobile06.jpeg" height="180" width="300" />
                        <p class="card-text">
                            <div class="cours">
                                <span>Practical Training in Our lab</span>
                                <span>100% Live Practical Traning</span>
                                <span>Mother Bord Repair Training</span>
                            </div>
                        </p>
                    </div>
                    <a class="btn btn-outline-success bi bi-person" href="/userreg">
                        <span class="now">Register Now</span>
                    </a>
                </div>
            </div>
            <div class="computers">
                <div class="subtit">
                    <span class="network">Computer Hardware &amp; Networking</span>
                    <p class="real">Real Time Repair in Our Service Center</p>
                </div>
                <div class="days">
                    <img src="images/computer1.png" class="computer1" />
                    <span class="offer">
                        <a class="btn btn-outline-success  bi bi-person" href="/userreg">
                            <span class="now">Register Now</span>
                        </a>
                    </span>
                </div>
            </div>
            <div className="cousedx">
                <Footer />
            </div>
        </div>
    );
};

export default Coursedx;