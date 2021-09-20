import React from 'react'
import Header from '../components/header'

const Home = () => (
  <div styles={positionStyle}>
    <style jsx global> {`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
    body {
      margin: 0px;
      padding: 0px;
      font-family: Quicksand;
          }
    `}</style>

    <img src="https://cdn.mos.cms.futurecdn.net/fs5rJxVnkbrumyJyfQ8tQg.jpg" style={styles} alt="" />
    <Header />
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

const styles = {
  backgroundImage: "url(https://cdn.mos.cms.futurecdn.net/fs5rJxVnkbrumyJyfQ8tQg.jpg)",
  backgroundPosition: 'center',
  position: "absolute",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity: "0.3",
  width: '100vw',
  height: '100vh'
};



export default Home;