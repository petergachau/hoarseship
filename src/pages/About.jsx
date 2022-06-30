import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
const About = () => {
  return (
    <div id='about'>
      <div className="about anime">
        <h1>About Us</h1>
        <div className="line"></div>
        <div className="top-right">
          <div className="about-details">
            <h2>Natus Vincere</h2>
       <p>Natus Vincere is a Latin phrase which means born to win.<br></br> At Hoarseship, we believe that everyone was born with the<br></br> potential  to achieve anything they want in this life.<br></br> With that in mind, we set out to redefine the education <br></br>  sector, identifying the lack of technology on the markets,<br></br>  especially in Africa.

Our dynamic sales models enable all <br></br>  companies to aspire to the desired software at affordable <br></br>  prices, no matter the scale or scope of the work. <br></br>Development for us isn’t just about money.<br></br>  We strive to push the standards to a greater level and<br></br>  deliver excellence in every venture we set forth</p>
          </div>
          <div className="about-philosophy">
            <div className="about-card">
              <h4>
                <FaQuoteLeft className='left'/>

              Building the Future,
               <br></br>Through Technology
               <FaQuoteRight className='right'/>
              </h4>
            </div>
          </div>
       
        </div>
        <div className="bottom-left">
          <h1>Our History</h1>
          <p>Our company was founded in April 2022 by a group of <br></br>  software developers and technology enthusiasts with one <br></br>  aim: To bring software solutions to the market at <br></br>  affordable prices, using sales revenue models that larger <br></br>  organizations cannot operate on.

We have a talented team<br></br>  that loves software development and is willing to go an <br></br> extra mile to keep you focused and happy. We design high <br></br>  quality software solutions according to your business <br></br>  requirements and specifications and we will make sure <br></br>  that you will be proud of your solutions.</p>
        </div>
      </div>
    
    </div>
  )
}

export default About