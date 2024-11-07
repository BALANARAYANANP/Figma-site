import React from 'react'
import { useState, useEffect } from 'react'
import image from '../components/Image/NavbarImg.png'
import image2 from '../components/Image/Tnav.png'
import image3 from '../components/Image/Mnav.png'

const Navbar = () => {
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
    // <div className='container'  style={{display:"flex", justifyContent:"space-between", alignItems:'center'}}>
    //   <div className="icon">
    //     <h3>Travel Vlog</h3>
    //   </div>
    //   <div className="menu">
    //     <ul style={{display:"flex", gap:"1rem", listStyleType:"none"}}>
    //         <li>Home</li>
    //         <li>Feautres</li>
    //         <li>Destinations</li>
    //         <li>Testimonials</li>
    //         <li>Services</li>
    //         <li>Subscribe</li>
    //         <li>Footer</li>
    //     </ul>
    //   </div>
    //   <div className="button">
    //     <div style={{display:'flex',alignItems:"center", gap:"1rem"}}>
    //         <button style={{backgroundColor:"transparent", width:"5rem", height:"2rem", borderRadius:"2rem",cursor:"pointer"}}>Log In</button>
    //         <button style={{ width:"5rem", height:"2rem", backgroundColor:"blue", color:"white", borderRadius:"2rem",cursor:"pointer"}}>Sign Up</button>
    //     </div>
    //   </div>
    // </div>
    <div style={{textAlign:"center"}}>
 <img src={image3} class="img-fluid d-block d-sm-none" alt="Small screen image"></img>
<img src={image2} class="img-fluid d-none d-sm-block d-md-none" alt="Medium screen image"></img>
<img src={image} class="img-fluid d-none d-md-block" alt="Large screen image"></img>

</div>
  )
}

export default Navbar
