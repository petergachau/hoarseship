import React from 'react'
import {FaWhatsapp,FaTwitter,FaInstagramSquare,FaFacebook,FaGithub} from 'react-icons/fa'
import {MdOutgoingMail} from 'react-icons/md'
const Tophead = () => {
  return (
    <div className="tophead">
        <div className="number">
            <h5><MdOutgoingMail className='icon'/>:petergachau57@gmail.com</h5>
        </div>
        <div className="social-media">
            <a href="https://twitter.com/ridge_techs"><FaTwitter className='icon'/></a>
            <a href="£"><FaFacebook className='icon'/></a>
            <a href="https://github.com/petergachau"><FaGithub className='icon' /></a>
            <a href="https://www.instagram.com/ridge_techs/"><FaInstagramSquare className='icon'/></a>
        </div>
    </div>
  )
}

export default Tophead