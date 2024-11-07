import {React, useState, useEffect} from 'react'
import image from '../components/Image/Sponser.png'
import image2 from '../components/Image/Sponser2.png'
import image3 from '../components/Image/Sponser3.png'

const Sponser = () => {
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
    <div style={{textAlign:"center"}}> 
   <img src={image3} class="img-fluid d-block d-sm-none" alt="Small screen image"></img>
<img src={image2} class="img-fluid d-none d-sm-block d-md-none" alt="Medium screen image"></img>
<img src={image} class="img-fluid d-none d-md-block" alt="Large screen image"></img>
    </div>
  )
}

export default Sponser
