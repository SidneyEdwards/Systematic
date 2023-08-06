import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AffirmationsPost = () => {
const [posts, setPosts] = useState([]);

useEffect(() => {
    // Fetch blog posts from the backend API
    axios.get('/api/posts')
    .then((response) => {
        setPosts(response.data);
    })
    .catch((error) => {
        console.error('Error fetching blog posts:', error);
    });
}, []);

return (
    <div>
    <h1>Affirmations</h1>
    {posts.map((post) => (
        <div key={post._id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <hr />
        </div>
    ))}
    </div>
);
};

export default AffirmationsPost;