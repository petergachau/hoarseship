import React from 'react'
import Faqs from '../components/Faqs'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import About from './About'
import Bootcamp from './Bootcamp'
import Contact from './Contact'
import Group from './Group'
import Services from './Services'
import Team from './Team'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <hr/>
      <Services/>
      <hr/>
      <About/>
      <hr/>
      <Contact/>
      <hr/>
      <Team/>
      <hr/>
      <Testimonials/>
      <hr />
      <Faqs/>
      
    </div>
  )
}

export default Home