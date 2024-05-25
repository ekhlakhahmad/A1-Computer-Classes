import React from 'react'
import Header from './components/Header/Header'
import Carousel from './components/Carousel_Img/Carousel'
import Content from './components/Content'
import Course from './components/Course/Course'
import Location from './components/Location'
import Footer from './components/Footer/Footer'
import Facility from './components/Facility/Facility'
import ProjectCounter from './components/ProjectCounter/ProjectCounter'

const App = () => {
  return (
    <div>
      <Header />
      <Carousel/>
      <Content/>
      <Course />
      <Facility />
      <ProjectCounter/>
      <Location />
      <Footer/>
    </div>
  )
}

export default App
