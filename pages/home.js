import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Main from '../components/home-main'
import Slideshow from '../components/slideshow'
import Slideshowlocation from '../components/slideshowlocation'

// Color Palette
// #003E92 (Blue)
// #FBAF00 (Yellow)
// #A15E49 (Brown)
// #285943 (Green)
// #F3F7F0 (White)
// #1a1b1c (Black)

const Home = () => (
  <div style={{
    height: 'auto',
    minHeight: '100%',
    position: 'relative'
  }}>
    <Header />
    <Navbar />
    <Main />
    <Slideshow />
    <Slideshowlocation/>
  </div >
)



export default Home;