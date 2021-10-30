import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Description from '../components/description'

const About = () => (
  <div style={positionStyle}>
    <Header />
    <Navbar/>
    <div>
      <div style ={header}>
        About Us
      </div>
      <Description/>
    </div>
  </div >
)

const header = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1596873364163-c3b61fa24af7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80)`,
  height: 300,
  width: '100%',
  objectFit: 'contain',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  textShadow: '-1px -1px 0 ##F3F7F0, 1px -1px 0 #F3F7F0, -1px 1px 0 #000, 1px 1px 0 #000',
  color: "#F3F7F0",
  fontSize: "45px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const positionStyle = {
  position: "relative",
  border: 0,
  padding: 0
}


export default About;