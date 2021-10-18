import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'

const About = () => (
  <div styles={positionStyle}>
    <Header />
    <Navbar/>
    <div styler ={header}>About us</div>
  </div >
)

const header = {
  display: 'flex',
  justifyContent: 'center',
  color: "black",
  fontSize: "22px"
}

const positionStyle = {
  position: "relative",
  border: 0,
  padding: 0
}


export default About;