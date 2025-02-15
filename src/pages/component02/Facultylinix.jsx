import React from "react";
import Navlinix from "./Navlinix";
import Footer from "../../component/Footer";


const Facultylinix = () => {
    return (
        <div>
            <Navlinix />
            <br>
            </br>
            <div>
                <h3 className="staff">TEACHING STAFF</h3>
                <br></br>
                <tbody>
                    <table  className="table-two" align="left">
                        <tr align="center" valign="middle">
                            <th>Sl.No.</th>
                            <th>Name of the Employees</th>
                            <th>Designation</th>
                            <th>Experience</th>
                        </tr>
                        <tr>
                            <td align="center" valign="middle">01.</td>
                            <td align="center">Soumya k</td>
                            <td align="center">Trainer</td>
                            <td align="center" valign="middle">1</td>
                        </tr
                        ><tr>
                            <td align="center" valign="middle">02.</td>
                            <td align="center">Archana k</td>
                            <td align="center">Trainer</td>
                            <td align="center" valign="middle">1</td>
                        </tr>
                        <tr>
                            <td align="center" valign="middle">03.</td>
                            <td align="center">Preeti Mooke </td>
                            <td align="center">Trainer</td>
                            <td align="center" valign="middle">1</td>
                        </tr>
                        <tr>
                            <td align="center" valign="middle">04.</td>
                            <td align="center">Sneha Rajput</td>
                            <td align="center">Trainer</td>
                            <td align="center" valign="middle">1</td>
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

export default Facultylinix;