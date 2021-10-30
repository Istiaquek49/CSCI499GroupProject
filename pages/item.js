import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'

const Item = () => (
    <div style={positionStyle}>
      <Header />
      <Navbar/>
      <div>
      <hr style={{color:"black"}}></hr>
        <div style={terstt}>
          <img src="https://images.unsplash.com/photo-1632985660129-0f67d8b1a48b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" style={imageSec} alt=""/>
          <div style={infoSec}>
            <h1 style={{paddingBottom:"15px"}}>Item Name</h1>
            <p style={{fontStyle:'italic',paddingBottom:"10px"}}>City, State</p>
            <p style={{fontStyle:'italic', textDecoration:'underline', color:'grey'}}> Read Reviews(2) </p>
            <br></br>
            <p>A long description of the product in question. Speaks on all the details a person needs to know when they sign up for and event or hotel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra varius purus, at aliquam lorem. Pellentesque eu ante vel purus tristique vestibulum. Proin tristique ornare scelerisque. Quisque quis massa nec odio pulvinar maximus. Fusce vestibulum eros ut magna dapibus fringilla. Praesent mattis erat quis consectetur pellentesque. 
              In vitae laoreet dui, quis suscipit nisl. Curabitur pretium vestibulum leo a congue. Vivamus ut arcu rutrum, iaculis lacus eget, sodales felis. Donec in blandit enim. In hac habitasse platea dictumst. Praesent gravida lacinia tempus. Morbi lacus lorem, luctus sit amet diam eget, pharetra gravida odio. Aenean turpis metus, vulputate vitae rutrum cursus, auctor nec ipsum. Donec commodo maximus mauris quis tempus. Vestibulum convallis quis nisl eu efficitur.
            </p>
            <br></br>
            <hr style={{color:"black"}}></hr>
            <br></br>
            <button style={buttonStyle}>ADD TO CART $200</button>
          </div>
        </div>
      </div>
    </div >
  )
  const positionStyle = {
    position: "relative",
    border: 0,
    padding: 0
  }
const terstt = {
  background: "#F3F7F0",
  color: 'black',
  height: '100vh',
  boxSizing: 'border-box',
  display: 'flex',
    justifyContent: 'flex-start',
    position: 'relative',
}
const imageSec = {
  marginTop: 50,
  marginLeft: 120,
  marginBottom: 20,
  marginRight: 20,
  maxHeight: 600,
  display: 'flex',
  justifyContent: 'space-between'
}
const infoSec = {
  marginLeft:70,
  marginTop: 50,
  marginRight: 65
}
const buttonStyle = {
  backgroundColor: '#285943',
  color: '#F3F7F0',
  padding: "15px 32px",
  border: '1px solid',
  borderRadius: '50px',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: 20,
  margin: "4px 2px"
}
export default Item;