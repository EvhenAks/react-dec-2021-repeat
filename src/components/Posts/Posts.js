import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postsService.getAllPosts().then(value => setPosts(value));
    }, [])

    return (
        <div style={{
            maxHeight: '370px',
            overflow: 'scroll',
            overflowX: 'hidden'
        }}>
            {
                posts && posts.map((post) => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;