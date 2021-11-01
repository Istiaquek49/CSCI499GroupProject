import React from 'react'
// import SearchBar from './Searchbar'
// import Footer from './Footer'

const description = () => (
        <div style={fix}>
        <section style={terstt}>
            <section style={greenCon}>
           <div>
           <h1 style={tester3}>
           <img src="https://static.onecms.io/wp-content/uploads/sites/34/2020/08/04/woman-hiking-mountain-getty-0720.jpg" style={pic2} alt="" />
                Explore. 
            </h1>
            </div>
            <h1 style={tester5}>
            <img src="https://purewows3.imgix.net/images/articles/2019_04/most-beautiful-places-in-the-world-Seljalandsfoss__Iceland.png?auto=format,compress&cs=strip" style={pic3} alt=""/>
                Experience.
            </h1>
            <h1 style={tester6}>
            <img src="https://img1.10bestmedia.com/Images/Photos/383754/GettyImages-1162114757_54_990x660.jpg" style={pic4} alt=""/>
            Enjoy.
            </h1>
            
            {<section style={border1}>
            </section> }
            {/* <hr style={{width:"50%"}}/>  */}
            <h2 style={tester8}>Convenient and Easy</h2>
            <h2 style={tester10}>At reservify, we offer a way to book and plan</h2>
            <h2 style={tester9}> your next trip without the hassle</h2>
            <h2 style={tester11}>of visiting different websites to plan what to do.</h2>
            {/* <p style={tester4}>
            <Footer/> \
            </p> */}
            </section>
        </section>
        </div>
    
)

const border1 = {
    height : 300,
    width : 500,
    marginTop : 300,
    marginLeft: -500,
    borderStyle: 'solid',
    borderColor: '#808080'
}

const tester8 = {
    marginTop: 340,
    marginLeft: -355,
    fontSize: '25px',
    fontStyle: 'italic',
    fontFamily: "Corben",
    fontWeight: '700'
}

const tester10 = {
    marginTop: 425,
    marginLeft: -310,
    fontSize: '20px',
    fontFamily: "Corben",
}

const tester9 = {
    marginTop: 470,
    marginLeft: -330,
    fontSize: '20px',
    fontFamily: "Corben",
}

const tester11 = {
    marginTop: 515,
    marginLeft: -330,
    fontSize: '20px',
    fontFamily: "Corben",
}

const fix = {
    position: 'relative',
    height: '100vh',
    minHeight: '100%'
}

const pic3 = {
    marginLeft: 560,
    marginTop: 200,
    backgroundImage: `url(https://static.onecms.io/wp-content/uploads/sites/34/2020/08/04/woman-hiking-mountain-getty-0720.jpg)`,
    position: "absolute",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    maxWidth: '450px',
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#1a1b1c'
}

const pic4 = {
    marginLeft: 200,
    marginTop: 380,
    backgroundImage: `url(https://purewows3.imgix.net/images/articles/2019_04/most-beautiful-places-in-the-world-Seljalandsfoss__Iceland.png?auto=format,compress&cs=strip)`,
    position: "absolute",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    maxWidth: '450px',
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#1a1b1c'
}

const terst = {
    background: "blue",
    color: 'black',
    height: '100vh',
    boxSizing: 'border-box',
    margin: 0,
    display: 'flex',
      justifyContent: 'flex-start',
      position: 'relative',
}
  
const tester = {
    marginLeft: 200,
    marginTop: 250,
    fontSize: '38px',
    position: 'relative',
}

const tester2 = {
    marginLeft: -150,
      marginTop: 310,
    fontSize: '24px',
    position: 'relative',
}

const tester3 = {
    marginLeft: 100,
    marginTop: 50,
    fontSize: '38px',
    fontStyle: 'italic',
    fontFamily: "Corben",
}

const terstt = {
    background: "white",
    color: 'black',
    height: '150vh',
    boxSizing: 'border-box',
    display: 'flex',
      justifyContent: 'flex-start',
      position: 'relative',
}

const greenCon = {
    // background: '#808080',
    paddingTop: '50px',
    paddingRight: '40px',
    paddingBottom: '50px',
    paddingLeft: '40px',
    marginTop: '80px',
    marginLeft: '50px',
    marginRight:'50px',
    boxSizing: 'border-box',
    display: 'flex',
      justifyContent: 'flex-start',
      position: 'relative',
      borderRadius: 20,
    borderStyle: 'solid',
    borderColor:'#808080',
    width: '100%',
    color:'#1a1b1c',
    

}

const pic2 = {
    marginLeft: 600,
    marginTop: 40,
    backgroundImage: `url(https://static.onecms.io/wp-content/uploads/sites/34/2020/08/04/woman-hiking-mountain-getty-0720.jpg)`,
    position: "absolute",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    maxWidth: '400px',
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#1a1b1c'
}

const tester4 = {
    marginLeft: -555
}

const tester5 = {
    marginTop: 100,
    fontSize: '38px',
    fontStyle: 'italic',
    fontFamily: "Corben",
}

const tester6 = {
    marginTop: 150,
    fontSize: '38px',
    fontStyle: 'italic',
    fontFamily: "Corben",
}

const tester7 = {
    position: 'relative',
    marginTop: 500,
    marginLeft: 200
}

export default description;