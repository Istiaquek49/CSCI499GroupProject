import React from 'react'

const Main = () => (
  <div style={{
    position: 'relative'
  }}>
    <img style={{
      width: '100%',
      height: 'calc(100vh - 60px)',
      opacity: '70%',
      objectFit: 'cover'
    }} src="/chor-tsang-07mSKrzKiRw-unsplash.jpg" />
    <div style={{
      position: 'absolute',
      top: 150,
      right: 130,
      color: '#1a1b1c',
      fontSize: '30px',
      letterSpacing: '.1rem',

    }}>
      Spend less time here, spend more time there.
    </div>
  </div>
)

export default Main