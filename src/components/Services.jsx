import {React,useState,useEffect} from 'react';
import '../App.css'
import image from '../components/Image/Ser.png'
import image2 from '../components/Image/Tapser.png'
import image3 from '../components/Image/mobser.png'
function Services() {
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
    // <section className="container my-5" style={{display:"flex", justifyContent:"space-evenly", gap:"2rem"}}>
    //   <div>
    //     <h6 style={{color:"red"}}>SERVICES</h6>
    //   <h3 className="text-center">Our Top Value Categories For You</h3></div>
    //   <div className="row text-center">
    //       <div className="col-md-4" style={{width:"15rem", aspectRatio:"1", backgroundColor:"transparent", boxShadow:"2px solid white"}}>
    //       <h3>Best Tour Guide</h3>
    //       <p>Professional and experienced tour guides.</p>
    //     </div>
    //     <div className="col-md-4" style={{width:"15rem", aspectRatio:"1", backgroundColor:"transparent", boxShadow:"2px solid white"}}>
    //       <h3>Easy Booking</h3>
    //       <p>Convenient booking process with top-notch support.</p>
    //     </div>
       
    //   </div>
    // </section>
    <div style={{textAlign:"center",marginLeft:"1rem"}}>
 <img src={image3} class="img-fluid d-block d-sm-none" alt="Small screen image"></img>
<img src={image2} class="img-fluid d-none d-sm-block d-md-none" alt="Medium screen image"></img>
<img src={image} class="img-fluid d-none d-md-block" alt="Large screen image"></img>
</div>
  );
}

export default Services;