import React from 'react'

const Team = () => {
  return (
    <div id='team'>
        <div className="team anime">
          <h3>Meet our team</h3>
            <div className="main-imag">
            
              <img src="https://res.cloudinary.com/pitz/image/upload/v1656157225/WhatsApp_Image_2022-06-25_at_2.35.23_PM_twj8mf.jpg" alt="" className="image" /> 
              <p>Peter Gachau</p> 
              
              <p> CEO and  Co Founder of horseship</p>
            </div>
            <hr/>
            <div className="others">
                <img src="https://res.cloudinary.com/pitz/image/upload/v1650697436/crbs3r7l06y0ik6uyafk.jpg" alt="" className="image"/>
                <p>Alex</p> 
              <p> Co Technical Team lead</p>
            </div>
            <hr/>
        </div>
    </div>
  )
}

export default Team