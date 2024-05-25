import React from 'react'
import Header from './components/Header/Header'
import Carousel from './components/Carousel_Img/Carousel'
import Content from './components/Content'
import Course from './components/Course/Course'
import Location from './components/Location'
import Footer from './components/Footer/Footer'
import Facility from './components/Facility/Facility'
import ProjectCounter from './components/ProjectCounter/ProjectCounter'
import Testimonial from './components/Testimonial/Testimonial'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <div>
      <Header />
      <Carousel/>
      <Content/>
      <Course />
      <Facility />
      <ProjectCounter />
      <Testimonial />
      <Register />
      <Login/>
      <Location />
      <Footer/>
    </div>
  )
}

export default App
