import React from "react";

function About(props) { 
    const alt = "blog logo";

    return (
        <aside>
            <img src={props.image} alt={alt}></img>
            <p>{props.about}</p>
        </aside>
    )
}

export default About;