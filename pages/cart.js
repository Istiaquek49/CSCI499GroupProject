import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'

const Cart = ({ items }) => {
  let total = 0
  items.forEach(item => total += item.price)

  const removeItem = (id) => {
    if (id.length) {
      fetch(`/delete-item?itemId=${id}`, {
        method: 'DELETE'
      })
        .then(_ => {
          window.location.reload(true)
        })
    }
  }

  return (
    <>
      <Header />
      <Navbar />
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 20,
          marginLeft: 20,
          border: '1px solid #e3e3e3',
          width: '65%',
          minHeight: 300,
          boxShadow: '2px 4px 4px #e3e3e3'
        }}>
          <p style={{
            fontSize: 24,
            width: '100%',
            textAlign: 'center',
            marginTop: 10
          }}>Order Details</p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              borderTop: '1px solid #e3e3e3',
              marginTop: 10,
              marginBottom: 20,
              width: '80%'
            }} />
            {items.map((item, i) => (
              <div style={{
                width: '90%',
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row'
                }}>
                  <img
                    src={item.image}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%'
                    }}
                  />
                  <div style={{ marginLeft: 20 }}>
                    <p style={{ fontSize: 16, marginBottom: 10 }}>{item.name}</p>
                    <p style={{ fontSize: 16 }}>${(item.price / 100).toFixed(2).toString()}</p>
                  </div>
                  <button style={{
                    textDecoration: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'black',
                    textAlign: 'center',
                    marginLeft: 'auto',
                    backgroundColor: 'white',
                    textDecoration: 'underline'
                  }}
                    onClick={() => removeItem(item.doc_id)}
                  >
                    Remove
                  </button>
                </div>
                {i < items.length - 1 && <div
                  style={{
                    width: '90%',
                    border: '1px solid #e3e3e3',
                    alignSelf: 'center',
                    marginTop: 20,
                    marginBottom: 10
                  }}
                />}
                <div
                  style={{ marginBottom: 10 }}
                />
              </div>
            ))}
          </div>
        </div>
        <div style={{
          width: '30%',
          position: 'sticky',
          height: 200,
          border: '1px solid #e3e3e3',
          marginLeft: 20,
          marginTop: 20,
          top: 20,
          right: 20,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '2px 4px 4px #e3e3e3'
        }}>
          <p style={{
            fontSize: 20,
            marginTop: 10,
            marginLeft: 10
          }}>
            {`${items.length} item${items.length > 1 ? 's' : ''}`}
          </p>
          <p style={{
            fontSize: 20,
            marginLeft: 10,
            marginTop: 10
          }}>{`Your Total: $${(total / 100).toFixed(2).toString()}`}</p>
          <button style={{
            width: 200,
            alignSelf: 'center',
            marginTop: 'auto',
            marginBottom: 20,
            height: 40,
            borderRadius: 50,
            backgroundColor: '#FBAF00',
            color: '#1a1b1c',
            textDecoration: 'none',
            border: 'none',
            cursor: 'pointer'
          }}>Checkout</button>
        </div>
      </div>
    </>
  )
}

Cart.getInitialProps = (ctx) => {
  return ctx.query
}

export default Cart;


