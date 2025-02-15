import React from "react";
import Footer from "../../component/Footer";
import Navlinix from "./Navlinix";


const Courselinix = () => {
    return (
        <div>
            <Navlinix />

            <div className="cad01">
                <div className="bons">
                    <span className="spoken">
                    <img src="images/spoken2.jpg" className="poken" />
                    </span>
                    <div className="pads">
                        <div className="dayes">
                            <span className="changer"><span className="fres">60 Day's </span><p className="enges">CHALLENGE</p></span>
                            <span className="discount">
                             <span> <img src="images/girl01.png" height="130" width="180" className="marg" /></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cadrss">
                <div class="courses card">
                    <span class="adds">OFFICE MANAGEMENT</span>
                    <div class="card-body">
                        <img src="images/LINIX004.jpg" height="180" width="310" />
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
                    <span class="adds">ACCOUNT MANAGEMENT</span>
                    <div class="card-body">
                        <img src="images/tally01.jpg" height="180" width="300" />
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
                    <span class="adds">DIPLOMA IN COMPUTER</span>
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
            {/* <div class="computers">
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
            </div> */}
            <div className="couslinix">
                <Footer />
            </div>
        </div>
    );
};

export default Courselinix;