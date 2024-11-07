import {React, useState, useEffect} from 'react';
// import image from '../components/1.png'
import '../App.css'
import image from '../components/Image/Dest1.png'
import image2 from '../components/Image/Tf.png'
import image3 from '../components/Image/mf.png'

function Features() {
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
    // <section className="container" style={{display:"flex"}}>
    //   <div style={{width:"55rem", height:"30rem", backgroundColor:"yellow", borderRadius:"0 50% 50% 0", opacity:"0.8", marginTop:"-4rem"}}>


    //                  <img src={image} alt='' style={{width:"5vw", height:"15vh", backgroundColor:"transparent",marginLeft:"2rem", marginTop:"3.5rem"}}></img> 
    //   </div>
    //   <div>
    //   <h2 className="text-center">We Help You Find Your Dream Location</h2>
    //   <p style={{textAlign:"center"}}>Contary to popular beleief, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia facilis dolor, impedit, suscipit architecto voluptatibus quaerat molestias, corporis ab sed consectetur placeat facere molestiae cumque! In, deleniti veritatis? Doloremque, incidunt. </p>
    //   <div className="row text-center" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    //     <div style={{display:"flex"}}>
    //     <div className="col-md-3">
    //       <h4>500+</h4>
    //       <p>Destinations</p>
    //     </div>
    //     <div className="col-md-3">
    //       <h4>100+</h4>
    //       <p>Tour Guides</p>
    //     </div></div>
    //     <div style={{display:"flex"}}>
    //     <div className="col-md-3">
    //       <h4>1500+</h4>
    //       <p>Happy Clients</p>
    //     </div>
    //     <div className="col-md-3">
    //       <h4>2k+</h4>
    //       <p>Reviews</p>
    //     </div>
    //   </div></div>
    //   </div>
    // </section>
    <div style={{textAlign:"center"}}  >
 <img src={image3} class="img-fluid d-block d-sm-none" alt="Small screen image"></img>
<img src={image2} class="img-fluid d-none d-sm-block d-md-none" alt="Medium screen image"></img>
<img src={image} class="img-fluid d-none d-md-block" alt="Large screen image"></img>
</div>
  );
}

export default Features;