import React from "react";

const Navbar = () => (
  <div style={headerStyle}>
    <h1 style={headingStyle}>Reservify</h1>
    <div style={{ marginLeft: 'auto' }}>
      <a style={linkStyle} href="/" >Home</a>
      <a style={linkStyle} href="/about">About</a>
      <a style={linkStyle} href="/help">Help</a>
      <a style={linkStyle} href='/cart'>Cart</a>
    </div>
  </div>
)

const headerStyle = {
  minheight: 200,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#F3F7F0',
  position: 'sticky'
}

const linkStyle = {
  padding: '0px 10px 0px 10px',
  margin: '15px 10px 15px 10px',
  fontSize: '20px',
  textDecoration: 'none',
  color: '#1a1b1c'
}

const headingStyle = {
  marginRight: 'auto',
  padding: '0px 10px 0px 10px',
  margin: '15px 10px 15px 10px',
  fontSize: '25px'
}

export default Navbar;