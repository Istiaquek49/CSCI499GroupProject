import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'

const Item = (props) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'ce'
  }}>
    <Header />
    <Navbar />
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 70
      }}>
        <img style={{
          width: 550,
          height: 600,
          objectFit: 'cover',
          marginLeft: 80
        }}
          src={props.images[0]} />
        <div style={{
          marginLeft: 100,
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row'
          }}>
            <p style={{
              fontSize: 24
            }}>{props.name}</p>
            <p style={{
              fontSize: 24,
              marginLeft: 'auto',
              marginRight: 130
            }}>${(props.price / 100).toFixed(2).toString()}</p>
          </div>
          <div style={{ width: '90%', height: 1, backgroundColor: '#e3e3e3', marginTop: 10, marginBottom: 10 }} ></div>
          <p style={{
            marginTop: 20,
            fontSize: 18
          }}>{props.desc}</p>
          <button style={{
            marginTop: 'auto',
            marginLeft: 'auto',
            marginRight: 40,
            borderRadius: 50,
            backgroundColor: '#FBAF00',
            color: '#1a1b1c',
            width: 160,
            height: 50,
            textDecoration: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 20
          }}>Add to Cart</button>
        </div>
      </div>
      <div style={{ width: '90%', height: 1, backgroundColor: '#e3e3e3', marginTop: 30, marginBottom: 20 }} ></div>
      <p style={{
        fontSize: 20
      }} >Reviews</p>
    </div>
  </div >
)

Item.getInitialProps = (ctx) => {
  return ctx.query
}

export default Item;