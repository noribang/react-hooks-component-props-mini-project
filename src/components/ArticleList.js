import React from "react";
import Article from "./Article";

    
function ArticleList({posts}) {
    console.log("posts: ", posts)

    /* Map through posts props array of objects to create Article component. */
    const article = posts.map((post) => {
        return <Article title = {post.title}
                        date = {post.date}
                        preview = {post.preview}
                        key = {post.id}
        />
    });

    return (
        <main>
            {article}
        </main>
    )
}

export default ArticleList;