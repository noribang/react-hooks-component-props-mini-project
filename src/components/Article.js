import React from "react";

function Article({title, 
                date = "January 1, 1970", 
                preview, 
                minutes,
                key}) {

    console.log(title)
    console.log(date)
    console.log(preview)
    console.log(key)

    return (
        <article key = {key}>
            <h3>{title}</h3>
            <small>{date} <span>&#9749;</span> {minutes + " min read"}</small>
            <p>{preview}</p>
        </article>
    )
}


export default Article;