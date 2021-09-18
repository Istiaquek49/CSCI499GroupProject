import React from 'react'
import Header from '../components/header'

const Home = () => (
  <div>
    <a>Cart</a>
    <a>Help</a>
    <a>Home</a>
   
    <h1 style={Header}>About The Creators</h1>
    <img src="https://cdn.mos.cms.futurecdn.net/fs5rJxVnkbrumyJyfQ8tQg.jpg" alt="placeholder" width="100%" height="100%"/>
  </div>
)

const Header = {
  textAlign: "center",
  color: "black",
  fontSize: "22px"
}


export default Home;