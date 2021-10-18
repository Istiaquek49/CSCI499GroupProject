import React from 'react'
import Header from '../components/header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Cards from '../components/Cards'

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