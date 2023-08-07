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
    <h5>Walking every morning with my son has been so good for us both! #mentalHealth -SusieNormal</h5>
    <h4>You can do this! It took me a few months, but now I am tracking every day and becoming the person that I want to be -Megan</h4>
    <h4>I have gotten so buff!! -BuffBobSquarePants</h4>
    <h5>Loving this! -GirlOnAMission</h5>

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