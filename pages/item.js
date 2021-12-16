import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'

const Item = (props) => {
  const [showAddReview, toggleAddReview] = useState(false)
  const [name, setName] = useState("")
  const [review, setReview] = useState("")
  const [error, setError] = useState(false)
  let ref = null

  const scrolltoBottom = () => {
    ref.scrollIntoView({ behavior: 'smooth' })
  }

  const addReview = () => {
    if (!review.length) setError(true)
    const reviewInfo = {
      name: name.length ? name : "Anonymous",
      text: review,
      objectID: props.objectID
    }
    fetch('/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewInfo)
    })
      .then(res => {
        window.location.reload(true)
      })
  }

  useEffect(() => {
    if (ref !== null) scrolltoBottom()
  }, [showAddReview])

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
                    border: '1px solid #e3e3e3',
                    padding: 10,
                    borderBottom: 10
                  }}>
                    <p style={{ fontSize: 20 }}>{review.name}</p>
                    <p style={{ marginTop: 30, fontSize: 18, marginBottom: 30 }}>{review.text}</p>
                  </div>
                ))}
              </div> :
              <p style={{ fontSize: 18, marginTop: 30 }}> No Reviews </p>
          }
          <div style={{ marginBottom: 40 }} />
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10
          }}>
            <p style={{ fontSize: 18, marginRight: 10 }}>Add Review</p>
            <button style={{
              border: '2px solid black',
              textDecoration: 'none',
              color: 'black',
              textAlign: 'center',
              fontSize: 20,
              backgroundColor: 'white',
              borderRadius: '50%',
              height: 30,
              width: 30,
              cursor: 'pointer'
            }}
              onClick={() => toggleAddReview(!showAddReview)}
            >
              {showAddReview ? '-' : '+'}
            </button>
          </div>
          {
            showAddReview &&
            <div style={{
              border: '1px solid #e3e3e3',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 500,
              height: 250,
              marginTop: 10,
              marginBottom: 30
            }}>
              <input
                placeholder='Name'
                style={{
                  height: 30,
                  width: '90%',
                  paddingLeft: 6,
                  outline: 'none',
                  fontSize: 14,
                  margin: '14px 6px'
                }}
                onChange={e => setName(e.target.value)}
              />
              <textarea
                placeholder='Type review here...'
                style={{
                  paddingLeft: 6,
                  paddingTop: 8,
                  height: 100,
                  width: '90%',
                  fontSize: 14,
                  resize: 'none',
                  margin: '0px 6px 10px 6px'
                }}
                onChange={e => {
                  setReview(e.target.value)
                  setError(false)
                }}
              />
              <button
                style={{
                  width: 150,
                  height: 30,
                  marginTop: 10,
                  borderRadius: 25,
                  border: 'none',
                  color: 'black',
                  backgroundColor: '#FBAF00',
                  cursor: 'pointer',
                  marginBottom: 20
                }}
                onClick={() => addReview()}
              >Add Review</button>
              {error &&
                <p style={{
                  fontSize: 14,
                  color: 'red',
                  marginBottom: 10
                }}>
                  Review is empty
                </p>}
            </div>
          }
        </div>
        {
          showAddReview &&
          <div
            style={{ float: 'left', clear: 'both' }}
            ref={(el) => ref = el}
          />
        }
      </div>
    </>
  )
}

Item.getInitialProps = (ctx) => {
  return ctx.query
}

export default Item;