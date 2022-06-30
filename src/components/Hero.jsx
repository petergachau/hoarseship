import React from 'react'
import { Link } from 'react-router-dom'
import Typical from 'react-typical'
const Hero = () => {
  return (
    <div className="main-page anime">
    <div className='Hero '>
      <div className='first'>
              <h1 className='text-1'>
              <Typical
                            loop={Infinity}
                            steps={[
                                'Welcome to .Hoarseship Software Development',
                                2000,
                                
                            ]}
                            />
                 <span className='text-2'></span></h1>

      </div>
      <div className="two">
              <h4>Customized Software Development and Integrated Solutions.</h4>
              <h5>We are a development team that specializes in the FullStack  Stack Technology.<br></br> Mobile apps, Web apps or Data Analysis/Science, whatever your needs, we've got you covered.</h5>
              </div>
              <div className="three">
                <Link to='/services'>
                  <button className="btn">
                  View Solutions
                </button>
                </Link>
                <Link to='/contact'>
                  <button className="btn">
                  Contact Us
                </button>
                </Link>
                

              </div>

    </div>
    </div>
  )
}

export default Hero