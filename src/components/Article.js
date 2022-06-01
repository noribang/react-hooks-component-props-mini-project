import React from "react";

function Article({title, 
                date = "January 1, 1970", 
                preview, key}) {
    console.log(title)
    console.log(date)
    console.log(preview)
    console.log(key)

    return (
        <article key = {key}>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}


export default Article;