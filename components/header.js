import React from "react";

const Header = () => (
    <div style={headerStyle}>
        <a href= "/cart">Cart</a>
        <a href= "/help">Help</a>
        <a href="/about">About</a>
        <a href="/home">Home</a>
    </div>
)

const headerStyle = {
    zIndex: 3,
    position: "relative"
}

export default Header;