import {React, useState, useEffect} from 'react'
// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import '../App.css'
import image from '../components/Image/cli.png'
import image2 from '../components/Image/Mcli.png'
import image3 from '../components/Image/Tcli.png'
function Testimonials() {
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
    //   {/* <ArrowCircleLeftIcon/>  */}
    //      <div style={{display:"flex", justifyContent:"space-evenly",textAlign:"center"}}>
    //       <div style={{width:"3rem", height:"3rem", backgroundColor:"white", color:"black", textAlign:"center",borderRadius:"50%"}}><h2> ←   </h2></div>
    //       <div>
    //   <h4 style={{textAlign:"center", color:"red"}}>TESTIMONIALS</h4>
    //   <h1 className="text-center">Trust Our Clients</h1>
    //   <div className="text-center">
    //     <p>"Best travel experience ever! Highly recommended!"</p>
    //     <div style={{display:"flex",justifyContent:"center",margin:" 2rem 0 2rem 0"}}>
    //     <h2 style={{color:"red"}}>- Maria Smith</h2> 
    //     <h3>/ Traavel Enthusiast</h3>
    //     </div>
       
    //     <h4>Contrary to popular belief, Lorem Ipsum is not Simply Random text. it has roots in  piece of classical Latin literature from 45</h4></div>
    //   </div>
    //   <div> <div style={{width:"3rem", aspectRatio:"1", backgroundColor:"blue", color:"white", textAlign:"center",borderRadius:"50%"}}><h2>→</h2></div></div>
    //   </div> 
    // </section>
    <div style={{textAlign:"center"}}>
     <img src={image2} class="img-fluid d-block d-sm-none" alt="Small screen image"></img>
<img src={image3} class="img-fluid d-none d-sm-block d-md-none" alt="Medium screen image" ></img>
<img src={image} class="img-fluid d-none d-md-block" alt="Large screen image"></img>
</div>
  );
}

export default Testimonials;