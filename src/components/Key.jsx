import { useEffect, useState } from 'react'
import React from 'react'
// import  image from '../components/11.jpg'
// import image2 from '../components/for.jpg'
import image from '../components/Image/Feat.png'
import image2 from '../components/Image/Tkf.png'
import image3 from '../components/Image/mkf.png'


const Key = () => {
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
    // <div className='container' style={{display:"flex", justifyContent:"space-evenly", gap:"10rem"}}>
    //   <div>
    //     <h2 style={{color:"red"}}>KEY FEATURUS</h2>
    //     <h1>We Offer Best Services</h1>
    //     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid suscipit doloribus numquam maiores laudantium inventore velit porro, modi facere eaque dignissimos incidunt perspiciatis deleniti voluptatibus earum exercitationem ullam commodi ratione!</p>
    //     <div>
    //         <div>
    //         <h3> We Offer Best Services</h3>
    //         <p>Loprem Ispum Is not Simply Random Text</p>
    //         </div>
    //         <div>
    //         <h3> Schedule Your Trip</h3>
    //         <p>It has roots  in a piece of classical</p></div>
    //         <div>
    //         <h3> Get Discount Coupons</h3>
    //         <p>Loprem Ispum Is not Simply Random Text</p>
    //         </div>
    //     </div>
    //   </div>
    //   <div style={{flex:"1"}}>
    //     <img src= {image} alt='' style={{width:"23rem", aspectRatio:"1",borderRadius:"8rem"}}></img>
    //     <img src= {image2} alt='' style={{width:"23rem", aspectRatio:"1",borderRadius:"6rem", position:"relative", marginTop:"-11rem", marginLeft:"4rem", border:"2rem solid #fed5d2 " }}></img>
    //   </div>
    // </div>
    <div style={{textAlign:"center"}}>
 <img src={image3} class="img-fluid d-block d-sm-none" alt="Small screen image"></img>
<img src={image2} class="img-fluid d-none d-sm-block d-md-none" alt="Medium screen image"></img>
<img src={image} class="img-fluid d-none d-md-block" alt="Large screen image"></img>
</div>

  )
}

export default Key
