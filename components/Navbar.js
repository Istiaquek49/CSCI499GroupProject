import React from "react";

const Header = () => (
    <div style={headerStyle}>
        <a style={{
                    padding: '0px 10px 0px 10px',
                    
            margin: '0px 10px 0px 10px',
            fontSize: "20px",
                    textdecoration: 'none',
                }} href="/home" >Reservify</a>
        <a style={{
                    padding: '0px 10px 0px 10px',
                    
            margin: '0px 10px 0px 10px',
            fontSize: "20px",
                    textdecoration: 'none'
                }} href= "/help">Help</a>
        <a style={{
                    padding: '0px 10px 0px 10px',
                    
            margin: '0px 10px 0px 10px',
            fontSize: "20px",
                    textdecoration: 'none'
                }} href="/about">About</a>
        <a style={{
                    padding: '0px 10px 0px 10px',
                    
            margin: '0px 10px 0px 10px',
            fontSize: "20px",
                    textdecoration: 'none',
                }} href='/cart'>Cart</a>
    </div>
)

const headerStyle = {
        minheight: 100,
        display: 'flex',
        border: '1px solid black',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
}


export default Header;