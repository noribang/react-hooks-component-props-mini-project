import React from "react";

// function About(props) { 
//     const alt = "blog logo";

//     return (
//         <aside>
//             <img src={props.image} alt={alt}></img>
//             <p>{props.about}</p>
//         </aside>
//     )
// }

function About({image = "https://via.placeholder.com/215", 
                about}) { 
    const alt = "blog logo";

    return (
        <aside>
            <img src={image} alt={alt}></img>
            <p>{about}</p>
        </aside>
    )
}


export default About;