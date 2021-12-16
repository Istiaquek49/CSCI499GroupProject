import React from 'react'


const description = () => (
        <div style={fix}>
            {/* <h1 style={headerSty}>Explore. Experience. Enjoy. </h1>
            <div style={para}>
                Convenient and Easy 
                <br></br>
                    At reservify, we offer a way to book and plan your next trip without the hassle 
                </div>
            <div style={image}>
                    <img src="https://static.onecms.io/wp-content/uploads/sites/34/2020/08/04/woman-hiking-mountain-getty-0720.jpg" style={imgs}/>
                    <img src="https://purewows3.imgix.net/images/articles/2019_04/most-beautiful-places-in-the-world-Seljalandsfoss__Iceland.png?auto=format,compress&amp;cs=strip" style={imgs}/>
                    <img src="https://img1.10bestmedia.com/Images/Photos/383754/GettyImages-1162114757_54_990x660.jpg" style={imgs}/>
                </div>
            <div style={greyBG}>

                <div style={contact}>
                    <h2>Contact Us</h2>
                    20 Filonos Street, NYC <br></br>
                    13457-6598, NY <br></br>
                    contact@reservify.com<br></br>
                    Tel: +1(918) 299-3999 <br></br>
                </div>

            </div> */}

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
            
            <section style={border1}>
            {/* <h2 style={tester8}> */}
                <h3 style={{paddingTop:20, fontFamily: "Corben"}}>Convenient and Easy </h3>
                At reservify, we offer a way to book and plan <br></br>
                your next trip without the hassle <br></br>
                of visiting different websites to plan what to do.
            {/* <h2 style={tester10}>
            <h2 style={tester9}> 
            <h2 style={tester11}> */}
   
            </section> 
            {/* <hr style={{width:"50%"}}/>   */}
         
            {/* <div style={contact}>
                    <hr></hr>
                    <br></br>
                    <h2>Contact Us</h2><br></br>
                    20 Filonos Street, NYC <br></br>
                    13457-6598, NY <br></br>
                    contact@reservify.com<br></br>
                    Tel: +1(918) 299-3999 <br></br>
            </div> */}
            {/* <p style={tester4}>
            <Footer/> \
            </p> */}
            </section> 
        </section>  
        </div>
    
)

const greyBG = {
    backgroundColor: '#f7f7f7',
    borderRadius: '7px',
    padding: '2em 1em',
    width: '100%',
    height: '100%',
    maxWidth: '2000px',
    maxHeight: '220px',
    marginTop: '2em',
    marginRight: 'auto',
    marginBottom: '2em',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    position: 'relative'
}

const headerSty = {
    marginTop: '60px',
    marginBottom: '30px',
    fontSize: '50px',
    textAlign: 'center',
    fontWeight: 'semibold',
    // fontWeight: 4,
    fontFamily: "zillaslab,palatino,Palatino Linotype,serif",
    color: "#666666"
}
const para = {
    fontSize: '25px',
    fontFamily: "zillaslab,palatino,Palatino Linotype,serif",
    fontWeight: '70px',
    lineHeight: '30px',
    color: "#666666",
    textAlign: 'center'
}

const image = {
    width: '200px',
    height: '390px',
    marginTop: '65px',
    marginLeft: '100px',
    marginRight: '100px',
    paddingTop: '30px',
    paddingLeft:'30px',
    display: 'flex',
    flex: '1 1',
    margin: '0 1rem',
    borderRadius: '3px',
    paddingRight: '20px',
    borderColor: 'white',
}
const imgs = {
    width: ' 390px',
    height: '300px',
    lineHeight: '20px',
    marginBottom: '30px',
    marginTop: '30px',
    boxSizing: 'border-box',
    marginLeft: '15px',
    marginRight: '15px',
    borderRadius: '10px',
    borderColor: 'white', 
    // boxShadow: '0 0 1px 0 rgb(8 11 14 / 6%), 0 16px 16px -1px rgb(8 11 14 / 10%',
    boxShadow: '0 1px 1px rgb(0 0 0 / 15%), 0 2px 2px rgb(0 0 0 / 15%), 0 4px 4px rgb(0 0 0 / 15%), 0 8px 8px rgb(0 0 0 / 15%)',
}

const contact = {
    fontFamily: "zillaslab,palatino,Palatino Linotype,serif",
    textAlign: 'center',
    width: 700,
    marginTop: '670px',
    marginRight: '800px',
    fontSize: '25px',
    lineHeight: '35px',
    color: "#666666"
}
const border1 = {
    height : 300,
    width : 500,
    marginTop : 300,
    marginLeft: -500,
    // marginRight: -500,
    borderStyle: 'solid',
    borderColor: '#808080',
    boxShadow: '0 1px 1px rgb(0 0 0 / 15%), 0 2px 2px rgb(0 0 0 / 15%), 0 4px 4px rgb(0 0 0 / 15%), 0 8px 8px rgb(0 0 0 / 15%)',
    textAlign: 'center',
    fontSize: '22px',
    // fontFamily: "zillaslab,palatino,Palatino Linotype,serif",
    color: "#666666",
    fontFamily: "Corben",
    lineHeight: '50px'
}

const tester8 = {
    marginTop: 340,
    marginLeft: -300,
    fontSize: '25px',
    // fontStyle: 'italic',
    fontWeight: '700',
    fontFamily: "zillaslab,palatino,Palatino Linotype,serif",
    color: "#666666",

}

const tester10 = {
    marginTop: 425,
    marginLeft: -320,
    fontSize: '20px',
    fontFamily: "zillaslab,palatino,Palatino Linotype,serif",
    color: "#666666",
}

const tester9 = {
    marginTop: 470,
    marginLeft: -330,
    fontSize: '20px',
    fontFamily: "zillaslab,palatino,Palatino Linotype,serif",
    color: "#666666",
}

const tester11 = {
    marginTop: 515,
    marginLeft: -390,
    fontSize: '20px',
    fontFamily: "zillaslab,palatino,Palatino Linotype,serif",
    color: "#666666",
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
    width: ' 390px',
    height: '300px',
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: 'white',
    boxShadow: '0 1px 1px rgb(0 0 0 / 15%), 0 2px 2px rgb(0 0 0 / 15%), 0 4px 4px rgb(0 0 0 / 15%), 0 8px 8px rgb(0 0 0 / 15%)',

}

const pic4 = {
    marginLeft: 250,
    marginTop: 380,
    backgroundImage: `url(https://purewows3.imgix.net/images/articles/2019_04/most-beautiful-places-in-the-world-Seljalandsfoss__Iceland.png?auto=format,compress&cs=strip)`,
    position: "absolute",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    width: ' 400px',
    height: '300px',
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: 'white',
    boxShadow: '0 1px 1px rgb(0 0 0 / 15%), 0 2px 2px rgb(0 0 0 / 15%), 0 4px 4px rgb(0 0 0 / 15%), 0 8px 8px rgb(0 0 0 / 15%)',

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
    color: "#666666"
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
    width: '95%',
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
    width: ' 390px',
    height: '300px',
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: 'white',
    boxShadow: '0 1px 1px rgb(0 0 0 / 15%), 0 2px 2px rgb(0 0 0 / 15%), 0 4px 4px rgb(0 0 0 / 15%), 0 8px 8px rgb(0 0 0 / 15%)',

}

const tester4 = {
    marginLeft: -555
}

const tester5 = {
    marginTop: 100,
    fontSize: '38px',
    fontStyle: 'italic',
    fontFamily: "Corben",
    color: "#666666"
}

const tester6 = {
    marginTop: 150,
    fontSize: '38px',
    fontStyle: 'italic',
    fontFamily: "Corben",
    color: "#666666"
}

const tester7 = {
    position: 'relative',
    marginTop: 500,
    marginLeft: 200
}

export default description;