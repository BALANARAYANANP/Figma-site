import{ React,useEffect,useState} from 'react';
import image from '../components/Image/Foot.png'
import image2 from '../components/Image/Tfoot.png'
import image3 from '../components/Image/Mfoot.png'
// import { FaAmazonPay } from "react-icons/fa";

function Footer() {
    const [isTabletView, setIsTabletView] = useState(window.innerWidth <= 768);
    const [screenSize, setScreenSize] = useState(getScreenSize());
    function getScreenSize() {
      if (window.innerWidth <= 480) return 'mobile';
      if (window.innerWidth  <= 768) return 'tablet';
      return 'desktop';
  }
  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize());
  
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    // <footer className="container text-center my-5" style={{display:"flex", justifyContent:"space-around", gap:"13rem"}}>
    //     <div>
    //         <h1>Travlog</h1>
    //         <div style={{marginTop:"2rem",width:"200%", fontSize:"1.3rem", textAlign:"justify"}}>
    //             <p>Contrary to popular beleief, Lorem Ipsum is not simply 
    //                 random text it has roots in a piece of classical Latin 
    //                 literature from 45 BC,
    //             </p>
    //             {/* <FaAmazonPay /> */}
            
    //         </div>
    //     </div>
    //     <div>
    //         <h1>Company</h1>
    //         <div style={{marginTop:"2rem", padding:"1rem", lineHeight:"2rem"}}>
    //             <p>About</p>
    //             <p>Career</p>
    //             <p>Mobile</p>
    //         </div>
    //     </div>
    //     <div>
    //         <h1>Contact</h1>
    //         <div style={{marginTop:"2rem", padding:"1rem", width:"200%", textAlign:"left",  marginRight:"100%"}}>
    //             <p>Why Travlog?</p>
    //             <p>Partner with us</p>
    //             <p>FAQs</p>
    //             <p>Blog</p>
    //         </div>
    //     </div>
    //     <div>
    //         <h1>Meet us</h1>
    //         <div style={{marginTop:"2rem", padding:"1rem", textAlign:"left"}}>
    //             <p>+00 1234567890</p>
    //             <p>info@travlog.com</p>
    //             <p>205, R Street, New York</p>
    //             <p>BD23200</p>
    //         </div>
    //     </div>
    //   {/* <p>&copy; 2024 Travel Agency. All Rights Reserved.</p> */}
    // </footer>
    <div style={{ textAlign:"center"}} >
  <img src={image3} class="img-fluid d-block d-sm-none" alt="Small screen image"></img>
<img src={image2} class="img-fluid d-none d-sm-block d-md-none" alt="Medium screen image"></img>
<img src={image} class="img-fluid d-none d-md-block" alt="Large screen image"></img>
</div>
  );
}

export default Footer;