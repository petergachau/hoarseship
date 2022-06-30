import React from 'react';
// import Message from './Message'
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa'

import { HashLink as Link } from 'react-router-hash-link'
import { useForm,ValidationError } from '@formspree/react'
const Contact = () => {
    const [state, handleSubmit] = useForm("myyoddzz");
        if (state.succeeded) {
            return <p>thanks for hiring me</p>;
        }
  return (
      <>
      <div className="contact anime">
    <form id='contact' onSubmit={handleSubmit} className="form">
        <div className="form-details">
          <h4>Contact our company</h4>
        <label className='label' htmlFor="name">name</label>
        <input type="text" className="form-input" placeholder='fullName' required />
        </div>
        
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}/>
          <div className="form-details">
        <label className='label' htmlFor="email">Email</label>
        <input type="email" className="form-input" placeholder='Email' required />
        </div>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}/>
          <div className="form-details">
        <label className='label' htmlFor="location">Location</label>
        <input type="text" className="form-input" placeholder='location' required />
        </div>
        <ValidationError 
          prefix="Location" 
          field="location"
          errors={state.errors}/>
       
        <textarea className='text-area' placeholder=' tell me about your project' name="message" id="meassage" cols="30" rows="10">
         
        </textarea>
        <ValidationError 
          prefix="message" 
          field="message"
          errors={state.errors}/>
           <button className='btn' type="submit" disabled={state.submitting}>
          Submit
        </button>

        <div className="social-icons"> 
        < a href="https://web.facebook.com/arsene.diop"><FaFacebook size={20} style={{color:'black', margin:'1rem'}}/></a>
        < a href="https://twitter.com/ridge_techs"><FaTwitter size={20} style={{color:'black', margin:'1rem'}}/></a>
        < a href="https://www.linkedin.com/in/peter-gachau-686a61224/"><FaLinkedin size={20} style={{color:'black', margin:'1rem'}}/></a>
        </div>
    </form>
    {/* <Message/> */}
</div>
      </>
  )
}

export default Contact