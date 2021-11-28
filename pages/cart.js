import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'

const Cart = () => (
  <div>
    <Header />
    <Navbar />
    <div>
      <h1 style={{
        marginTop: 100,
        marginLeft: 100
      }}>Shopping Cart</h1>
      <img src="https://images.unsplash.com/photo-1528266542126-d64713949918?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80" style={imageSec2} alt=""/>
      <div style={{
        maxWidth: 300,
        marginTop:-300,
        marginLeft:500
      }}>
      <p>How many days?</p>
        <Select options= {options} /></div>
        <div style={{
        maxWidth: 300,
        marginTop:-150,
        marginLeft:500
      }}>
      <p>How many people?</p>
        <Select options={options} /></div>
      <div style={{
        marginLeft: 500,
        marginTop: 200
      }}>
        <button style={{
          fontSize: 20,
          marginLeft: 25
      }}>Delete</button></div>
      <div style={{
        marginLeft: 1150,
        fontSize: 25,
        marginTop: -250
      }}><p>Item:</p>
      </div>
        <div style={{
        marginLeft: 1150,
        fontSize: 25,
        marginTop: 50
      }}><p>Taxes:</p></div>
       <div style={{
        marginLeft: 1150,
        fontSize: 30,
        marginTop: 25
      }}><br></br>
      <hr style={{color:"black"}}></hr>
      <br></br> <p>Total:</p>
      </div>
      <button style={{
        backgroundColor: '#285943',
        color: '#F3F7F0',
        fontSize: 20,
        marginLeft: 1300,
        padding: "15px 32px",
        borderRadius: '50px',
        marginTop: 50,
      }}>Checkout</button>
      <div style={{
        marginLeft: 1350,
        fontSize: 25,
        marginTop: -343
      }}>$500</div>
      <div style={{
        marginLeft: 1353,
        fontSize: 25,
        marginTop: 47
      }}>$$$</div>
      <div style={{
        marginLeft: 1353,
        fontSize: 25,
        marginTop: 100
      }}>$$$$</div>
    </div>
 
  </div > 
)
export default Cart;


