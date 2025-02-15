import React from "react";
import Navadx from "./Navadx";
import Footer from "../../component/Footer";


const Facultydx = () => {
    return (
        <div>
            <Navadx />
            <br>
            </br>
            <div>
                <h3 className="staff">TEACHING STAFF</h3>
                <br></br>
                <tbody>
                    <table className="table table-bordered" align="center">
                        <tr align="center" valign="middle">
                            <th>Sl.No.</th>
                            <th>Photo</th>
                            <th>Name of the Employees</th>
                            <th>Designation</th>
                            <th>Experience</th>
                        </tr>
                        <tr>
                            <td align="center" valign="middle">01.</td>
                            <td> <img src="images/deepak.png" alt="text" width="100px" height="100px" /></td>
                            <td>Deepak Kumar</td>
                            <td>Trainer</td>
                            <td align="center" valign="middle">15</td>
                        </tr>
                        <tr>
                              <td align="center" valign="middle">02.</td>
                            <td> <img src="images/abdul.jpeg" alt="text" width="100px" height="100px" /></td>
                            <td>Abdul Basit</td>
                            <td>Lab Supporting Technician</td>
                            <td align="center" valign="middle">02</td>
                        </tr>
                        <tr>
                            <td align="center" valign="middle">03.</td>
                            <td> <img src="images/preeti.jpeg" alt="text" width="100px" height="100px" /></td>
                            <td>Syed Saheb</td>
                            <td> Computer Lab Supporting Technician</td>
                            <td align="center" valign="middle">3</td>
                        </tr>
                    </table>
                </tbody>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Facultydx;