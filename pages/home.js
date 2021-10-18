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
    border: '1px solid black',
    position: 'relative',
    height: '100vh',
    minHeight: '100%'
  }}>
    <Header />
    <Navbar />
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      marginLeft: 30,
      marginTop: 50
    }}>
      <h1>
        Reservify
      </h1>
    </div>
    <div>Spend Less Time Here Spend More Time There</div>
    {/* <Cards /> */}
    <Footer />
  </div >
)



export default Home;