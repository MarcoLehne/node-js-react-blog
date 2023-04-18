import React, {forwardRef} from "react";
import { autoResize } from "../helpers/helpers";

const WritePost = forwardRef((props, writtenPost) => {

    const textarea = writtenPost.current;    
    if(textarea) {
        textarea.addEventListener('input', autoResize);
    }

    const placeholder = "Enter your text here";

    return(
        <div id="write-post-div" name="write-post-div">
            <textarea placeholder={placeholder} onInput={autoResize} name="write-post-text-enter" ref={writtenPost}/>
        </div>
    )
});

export default WritePost;