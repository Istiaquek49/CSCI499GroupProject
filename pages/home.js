import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
// import Cards from '../components/Cards'

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
    <div style={{
      position: 'relative'
    }}>
      <img style={{
        maxWidth: '100%',
        height: 'auto',
        opacity: '70%',
      }} src="/chor-tsang-07mSKrzKiRw-unsplash.jpg" />
      <div style={{
        position: 'absolute',
        top: 150,
        right: 130,
        color: '#1a1b1c',
        fontSize: '30px',
        letterSpacing: '.1rem',
        
      }}>
        Spend less time here, spend more time there.
      </div>
    </div>
    {/* <Cards /> */}
    {/* <Footer /> */}
  </div >
)



export default Home;