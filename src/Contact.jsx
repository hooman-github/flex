import React from "react";
// import img from './img/download4.jpg';
import img2 from "./img/img2.webp";
import img3 from "./img/logo.svg";
const Contact = () => {
  return (
    <div>
      <div style={{float:"right", margin:"50px"}}>
        <img src={img3} alt="تصویر" />
      </div>
      <br/>
      <div>
        <img
          src={img2}
          alt="تصویر"
          style={{ width: "1300px", height: "300px" }}
        />
      </div>
    </div>
  );
};

export default Contact;
