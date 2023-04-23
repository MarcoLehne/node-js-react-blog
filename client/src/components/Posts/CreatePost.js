import React from "react";
import "./CreatePost.css";

function CreatePost({ onCreatePost }){

    const handleClick = () => {
        onCreatePost();
    }

    return (
        <button name="create-btn" onClick={handleClick}>
            Create
        </button>
    )
}

export default CreatePost;