import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';


// pages///
import Home from './component/Home';
import Footer from './component/Footer';
import Login  from './component/Login';
///dx////
import Homedx from './pages/component01/Homedx';
import Coursedx from './pages/component01/Coursedx';
import Facultydx from './pages/component01/Facultydx';
import Gallerydx from './pages/component01/Gallerydx';
import Contactdx from './pages/component01/Contactdx';
import Downloadx from './pages/component01/Downloaddx';
////linix////
import Homelinix from './pages/component02/Homelinix';
import Courselinix from './pages/component02/Courselinix';
import Facultylinix from './pages/component02/Facultylinix';
import Gallerylinix from './pages/component02/Gallerylinix';
import Contactlinix from './pages/component02/Contactlinix';
import Downloadlinix from './pages/component02/Downloadlinix';


import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="footer" element={<Footer />} />
          <Route path="login" element={<Login/>} />
        </Routes>
        <Routes>
          <Route path="/component01" element={<Homedx />} />
          <Route path="coursedx" element={<Coursedx />} />
          <Route path="facultydx" element={<Facultydx />} />
          <Route path="gallerydx" element={<Gallerydx />} />
          <Route path="downloaddx" element={<Downloadx />} />
          <Route path="contactdx" element={<Contactdx />} />
        </Routes>
        <Routes>
          <Route path="/component02" element={< Homelinix />} />
          <Route path="courselinix" element={<Courselinix />}/>
          <Route path="facultylinix" element={<Facultylinix />} />
          <Route path="gallerylinix" element={<Gallerylinix />} />
          <Route path="downloadlinix" element={<Downloadlinix />} />
          <Route path="contactlinix" element={<Contactlinix />} />
        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
