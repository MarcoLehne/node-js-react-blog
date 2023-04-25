import React from "react";
import "./PublishPost.css";

function PublishPost({ onPublishPost }){

    const handleClick = () => {
        onPublishPost();
    }

    return (
        <button name="publish-btn" onClick={handleClick}>
            Publish
        </button>
    )
}

export default PublishPost;