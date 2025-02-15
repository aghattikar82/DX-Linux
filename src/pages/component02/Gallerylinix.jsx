import React from "react";
import Navlinix from "./Navlinix";
import axios from "axios";
import { useEffect,useState, } from "react";
import Footer from "../../component/Footer";


const  Gallerylinix = () => {
    const [images, setImages] = useState([{img_src:""}]);
    const [previewSrc, setPreviewSrc] = useState('images/hover01.jpeg');

    useEffect(()=>{

        axios.get("mobile.json")
        .then(response=>{
            setImages(response.data);
        })

    },[])

    function handleMouseOver(e){
        setPreviewSrc(e.target.src);
    }
   
    return (
        <div>
               <Navlinix />
            <div className="container-fluid">
             
                <div className="row mt-4">
                    <div className="col-2">
                        {
                            images.map(image =>
                                <div key={image.img_src} className="border my-2 border-2" style={{ width: '95px' }} >
                                    <img onMouseOver={handleMouseOver} src={image.img_src} width="95" height="80" />
                                </div>
                            )
                        }
                    </div>
                    <div className="col-10">
                        <img width='900' src={previewSrc} height="500" />
                    </div>
                </div>
            </div>
            <div className="galary">
                <Footer />
            </div>
        </div>

    );
};

export default Gallerylinix;