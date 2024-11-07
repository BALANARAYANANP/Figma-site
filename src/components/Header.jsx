import React from "react";
import { useState, useEffect } from "react";
// import Card from "./Card/Card";
// import Card4 from "./Card/Card4";
// import Card5 from "./Card/Card5";
// import Card6 from "./Card/Card6";
import image from '../components/Image/header.png'
import image2 from '../components/Image/Header2.png'
import image3 from '../components/Image/Header3.png'
// import '../App.css'

function Header() {
  const [isTabletView, setIsTabletView] = useState(window.innerWidth <= 768);
  const [screenSize, setScreenSize] = useState(getScreenSize());
  function getScreenSize() {
    if (window.innerWidth <= 480) return 'mobile';
    if (window.innerWidth <= 768) return 'tablet';
    return 'desktop';
}
useEffect(() => {
  const handleResize = () => setScreenSize(getScreenSize());

  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
}, []);
  return (
    // <header className="container text-center my-5" style={{display:"flex", justifyContent:"space-between"}}>
    //   <div style={{alignItems:"center"}}>
    //   <h1>Travel Top Destinations of the World</h1>
    //   <p>Explore the beauty of the world with our best services</p>
    //   <button className="btn btn-primary">Explore Now</button></div>
    //   <div style={{display:"flex", gap:"1rem"}}>
    //     <div style={{gap:"1rem"}}>
    //     <Card4/>
    //     <Card5/>
    //     </div>
    //     <div style={{alignItems:"center",marginTop:"5rem"}}>
    //       <Card6/>
    //     </div>
    //   </div>
    // </header>
    < div style={{textAlign:"center",marginLeft:"0rem"}}>
   <img src={image3} class="img-fluid d-block d-sm-none" alt="Small screen image"></img>
<img src={image2} class="img-fluid d-none d-sm-block d-md-none" alt="Medium screen image"></img>
<img src={image} class="img-fluid d-none d-md-block" alt="Large screen image"></img>
</div>
  );
}

export default Header;
