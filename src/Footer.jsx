import React from 'react';
import img from './img/download5.jpg';

const Footer = () => {
  return (
    <div style={{alignItems: "center"}}>
      {/* <h1>فوتر</h1> */}
      <br/>
<table style={{width:"1000px", height:"200px",margin:"250px"}}>
    <tr><td><img src={img}  alt="bbb" style={{width:"150px", height:"150px",borderRadius: '50%'}}/>;</td>
    <td><img src={img}  alt="bbb" style={{width:"150px", height:"150px",borderRadius: '50%'}}/>;</td>
    <td><img src={img}  alt="bbb" style={{width:"150px", height:"150px",borderRadius: '50%'}}/>;</td></tr>


</table>
      {/* <img src={img}  alt="bbb" style={{width:"150px", height:"150px",borderRadius: '50%'}}/>; */}
    </div>
  );
}

export default Footer;
