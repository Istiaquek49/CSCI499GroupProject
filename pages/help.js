import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'


const Help = () => (
    <div styles={positionStyle}>
    <Header />
    <Navbar/>
    </div >
  )
  
  const header = {
    textAlign: "center",
    color: "black",
    fontSize: "22px"
  }
  
  const positionStyle = {
    position: "relative",
    border: 0,
    padding: 0
  }
  
  
  
  export default Help;