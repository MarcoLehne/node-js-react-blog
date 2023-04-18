import React from "react";

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