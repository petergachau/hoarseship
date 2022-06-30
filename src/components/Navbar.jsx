import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import{FaTimes} from 'react-icons/fa'
import {FaWhatsapp,FaTwitter,FaInstagramSquare,FaFacebook,FaGithub} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  const [show,setShow]=useState(false)
  
  const activeNav=()=>{
    setShow(!show)
  }
  return (
    <div className="navbar">
      <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUfjcnBrMtNYuZa5TyZKjQtRa-rnWO2EL_Hw&usqp=CAU" alt="" className='img'/>
        </div>
        <div className="sidebar">
          <div onClick={activeNav}  className={show ? 'side-icons' :'header-list' }>
           {!show ? (<GiHamburgerMenu />):<FaTimes/> }
          </div>
         { show ? 

        
          <div className="side-links">
         
          
          <li className="link">
                       <Link className='link' to='/'>Home</Link> </li>
                
                <Link to='/about' className='link'>
                    <li className="link" >About Us</li>
                    </Link>
                    <Link to='/services' className='link'>
                    <li className="link">Services</li>
                    </Link>
                    <Link to='/bootcamp' className='link'>
                    <li className="link">Courses</li>
                    </Link>
                    <Link to='/team' className='link'>
                    <li className="link">Team</li>
                    </Link>
                    <div className="side-contact-link">
        <Link to='/contact'>
              <button className='buttons'>
                Contact
            </button>      
                    </Link>
                    <Link to='/group'>
              <button className='buttons'>
                Join Us
            </button>      
                    </Link>
                 
            
        </div>
        <div className="social-media">
            <a href="https://twitter.com/ridge_techs"><FaTwitter className='icons'/></a>
            <a href="£"><FaFacebook className='icons'/></a>
            <a href="https://github.com/petergachau"><FaGithub className='icons' /></a>
            <a href="https://www.instagram.com/ridge_techs/"><FaInstagramSquare className='icons'/></a>
        </div>
          </div>:null }
        </div> 
        <div className="nav-links">
            <ul className="links">
                
                    <li className="link">
                       <Link className='link' to='/'>Home</Link> </li>
                
                <Link to='/about' className='link'>
                    <li className="link" >About Us</li>
                    </Link>
                    <Link to='/services' className='link'>
                    <li className="link">Services</li>
                    </Link>
                    <Link to='/bootcamp' className='link'>
                    <li className="link">Courses</li>
                    </Link>
                    <Link to='/team' className='link'>
                    <li className="link">Team</li>
                    </Link>
                </ul>
        </div>
        <div className="contact-link">
        <Link to='/contact'>
              <button className='btn'>
                Contact
            </button>      
                    </Link>
                    <Link to='/group'>
              <button className='btn'>
                Join Us
            </button>      
                    </Link>
                   
            
        </div>
    </div>
  )
}

export default Navbar





























// import React from 'react';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const Navbar= ()=>{
//   const notify = () => toast("Wow so easy!");

//   return (
//     <div>
//       <button onClick={notify}>Notify!</button>
//       <ToastContainer />
//     </div>
//   );
// }