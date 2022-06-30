import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'

const Testimonials = () => {
  return (
    <div className="main-test">
        <h3>Our Testimonials</h3>
        <div className="testimonials">
        
        <div className="card-testimonial">
           <div className="image-test">
            <img src="https://res.cloudinary.com/pitz/image/upload/v1643945447/cld-sample.jpg" alt="" className='image-tesi' />
            {/* <p>joseph wanjau</p> */}
           </div>
          <p>
            <FaQuoteLeft className='left'/> 
          I wanted to take a moment to <br /> thank you for the services <br /> your has provided.  Your has <br /> been a pleasure to work with, <br /> professional and timely. <br /> The only delay in work that<br />  we have experienced has been <br /> due to our own lack of <br /> organization managing our<br /> projects, not yours
          <div className='right-text'><FaQuoteRight /> </div>
          </p>
        </div>
        <div className="card-testimonial">
        <div className="image-test">
            <img src="https://res.cloudinary.com/pitz/image/upload/v1643945410/sample.jpg" alt="" className='image-tesi' />
            {/* <p>joseph wanjau</p> */}
           </div>
          <p>
          <FaQuoteLeft className='left'/> 
          I wanted to take a moment to <br /> thank you for the services <br /> your has provided.  Your has <br /> been a pleasure to work with, <br /> professional and timely. <br /> The only delay in work that<br />  we have experienced has been <br /> due to our own lack of <br /> organization managing our<br /> projects, not yours
          <div className='right-text'><FaQuoteRight /> </div>
          
          </p>

        </div>
    </div>
    
    </div>
    
  )
}

export default Testimonials