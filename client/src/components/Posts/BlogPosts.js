import React, {useState,useRef} from "react";
import { useAsync } from "react-use";
import CreatePost from "./CreatePost";
import WritePost from "./WritePost";
import PublishPost from "./PublishPost";
import TitleCard from "./TitleCard";
import { useSelector } from "react-redux";
import "./BlogPosts.css";

const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: 'palceholder' })
  };

function BlogPosts(props){

    const [posts, setPosts] = useState([]);
    const [showPosts, setShowPosts] = useState(true);
    const writtenPostRef = useRef();

    const isLoggedIn = useSelector(state => state.isLoggedIn).value;

    useAsync(async () => {
        const userName = window.location.href.split("/").slice(-1)[0];
        options.body = JSON.stringify({userName: userName})
        const response = await fetch("/internal/user", options);
        const result = await response.json();
        setPosts(result.posts);
    }, [])

    const createPost = () => {
        setShowPosts(false);
    }

    // this gets executed on the button click
    const publishPost = async () => {

        let newPost = writtenPostRef.current.value;
        const userName = window.location.href.split("/").slice(-1)[0];
        options.body = JSON.stringify({
            userName: userName, 
            content: writtenPostRef.current.value,
            date: [0,0,0]
        })
        const response = await fetch("/internal/user/addPost", options);
        await response.json();

        setPosts([{date: [0,0,0], content: newPost},...posts])
        setShowPosts(true);
    };
    
    return (
        <div id="blog-posts-container">
            <TitleCard />
            {isLoggedIn
                ? showPosts
                    ? <CreatePost onCreatePost={createPost}/>
                    : <PublishPost onPublishPost={publishPost}/>
                : null
            }        
            <div id="blog-posts">
                {showPosts
                    ? posts.map((post,i) => {
                            return (
                            <h1 key={i} name="blog-post">
                                {post.content}
                            </h1>)
                            })
                    : <WritePost ref={writtenPostRef}/>
                }            
            </div>           
        </div>
    )
}

export default BlogPosts;