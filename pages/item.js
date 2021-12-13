import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Searchbar2 from '../components/searchbar2'

const Item = (props) => {

  const addItem = () => {
    fetch(`/add-item/${props.objectID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: props.objectID
      })
    })
      .then(res => res.json())
  }

  return (
    <>
      <Header />
      <Navbar />
      <Searchbar2/>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
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
              }}
                onClick={_ => addItem()}
              >Add to Cart</button>
            </div>
          </div>
          <div style={{ width: '90%', height: 1, backgroundColor: '#e3e3e3', marginTop: 30, marginBottom: 20 }} ></div>
          <p style={{
            fontSize: 20
          }} >Reviews</p>
          {
            props.reviews.length ?
              <div style={{
                marginTop: 30,
                width: '80%'
              }}>
                {props.reviews.map(review => (
                  <div style={{
                    borderBottom: '1px solid #e3e3e3',
                  }}>
                    <pre style={{fontSize: 20}}>{review.first_name}  {review.last_name}</pre>
                    <p style={{marginTop: 30, fontSize: 18, marginBottom: 30}}>{review.text}</p>
                  </div>
                ))}
              </div> :
              <p style={{ fontSize: 18, marginTop: 30 }}> No Reviews </p>
          }
        </div>
      </div >
    </>
  )
}

Item.getInitialProps = (ctx) => {
  return ctx.query
}

export default Item;