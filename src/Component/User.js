import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyapi.io/data/v1/user', {
      headers: { 'app-id': '64de6b0b2e54a7df505611ee' }, // Replace with your actual app ID
    })
    .then((response) => {
      setUsers(response.data.data);
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
    });
  }, []);

  return (
    <div>
      <Typography variant="h4">Users</Typography>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;