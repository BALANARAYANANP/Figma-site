import React from 'react'


const Navbar2 = () => {
  return (
    <div className='container'  style={{display:"flex", justifyContent:"space-evenly"}}>
      <div className="icon">
        <h3>Travel Vlog</h3>
      </div>
      <div className="menu">
      <h3>Travel Vlog</h3>
      </div>
      <div className="button">
        <div style={{display:'flex',alignItems:"center", gap:"1rem"}}>
            <button style={{backgroundColor:"transparent", width:"5rem", height:"2rem", borderRadius:"2rem",cursor:"pointer"}}>Log In</button>
            <button style={{ width:"5rem", height:"2rem", backgroundColor:"blue", color:"white", borderRadius:"2rem",cursor:"pointer"}}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar2
