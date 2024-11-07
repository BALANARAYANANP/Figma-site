import {React, useState, useEffect} from 'react'
import '../App.css'
import image2 from '../components/Image/Msubs.png'
import image3 from '../components/Image/Tsubs.png'

import image from '../components/Image/Sub.png'
function Subscribe() {
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
    // <section className="container my-5 text-center">
    //   <h4 style={{color:"red"}}>SUBSCRIBE TO OUR NEWSLETTER</h4>
    //   <h1 style={{fontWeight:"bold"}}>Prepare Yourself & Let's Explore the Beauty of the World</h1>
    //   <form className="d-flex justify-content-center" style={{marginTop:"2rem"}}>
    //     <input type="email" placeholder="Your Email" className="form-control w-50" />
    //     <button type="submit"  style={{backgroundColor:"#6D5CC4", color:"white", marginLeft:"0.5rem", border:"none", height:"3rem" , width:"9rem", borderRadius:"1rem", fontSize:"1.5rem"}}>Subscribe</button>
    //   </form>
    // </section>
    <div style={{textAlign:"center"}}>
    <img src={image2} class="img-fluid d-block d-sm-none" alt="Small screen image"></img>
<img src={image3} class="img-fluid d-none d-sm-block d-md-none" alt="Medium screen image" style={{marginLeft:"1rem"}}></img>
<img src={image} class="img-fluid d-none d-md-block" alt="Large screen image"></img>
</div>
  );
}

export default Subscribe;