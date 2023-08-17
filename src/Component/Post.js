import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios.get('https://dummyapi.io/data/api/post', {
  //     headers: { 'app-id': '64de6b0b2e54a7df505611ee' }, // Replace with your actual app ID
  //   })
  //   .then((response) => {
  //     setPosts(response.data.data);
  //   })
  //   .catch((error) => {
  //     console.error('Error fetching posts:', error);
  //   });
  // }, []);


  useEffect(() => {
    axios.get('https://dummyapi.io/data/v1/post', {
      headers: { 'app-id': '64de6b0b2e54a7df505611ee' }, // Replace with your actual app ID
    })
    .then((response) => {
      setPosts(response.data.data);
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
    });
  }, []);

  return (
    <div>
      <Typography variant="h4">Posts</Typography>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;