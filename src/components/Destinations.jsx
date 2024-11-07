import React from 'react';
import '../App.css'
import { useState, useEffect } from "react";
import Card from './Card/Card';
import Card2  from './Card/Card2';
import Card3 from './Card/Card3';
import image from '../components/Image/Dest.png'
import image3 from '../components/Image/Mdest.png'
import image2 from '../components/Image/Tdest.png'

function Destinations() {
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
    // <section className="container my-5">
    //   <h2 className="text-center">Explore Top Destinations</h2>
    //   <div style={{display:"flex", justifyContent:"evenly", gap:"7rem"}}>
    //   <div >
    //     <Card/>
    //     </div>
    //     <div >
    //      {/* <Card style={{backGroundImage:`url('./11.jpg')`}}/> */}

    //    <Card2/>
    //     </div>
    //     <Card3/>
    //   </div>
    // </section>
    <div style={{textAlign:"center"}}>
   <img src={image3} class="img-fluid d-block d-sm-none" alt="Small screen image"></img>
<img src={image2} class="img-fluid d-none d-sm-block d-md-none" alt="Medium screen image"></img>
<img src={image} class="img-fluid d-none d-md-block" alt="Large screen image"></img>
</div>
  );
}

export default Destinations;