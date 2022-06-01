import React from "react";

function Header(props) {
    console.log(props)
    return (
        <header id="header">
            {/* <h1>hello...</h1> */}
            <h1>{props.name}</h1>
        </header>
    )
}

export default Header;