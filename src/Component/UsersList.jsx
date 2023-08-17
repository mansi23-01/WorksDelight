import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const urlDummyPost = "https://dummyapi.io/data/v1/user/create";
  const header_ = { "app-id": "64de6b0b2e54a7df505611ee" };
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(
        "https://dummyapi.io/data/api/user",
        newUser,
        {
          headers: {
            "app-id": "64de6b0b2e54a7df505611ee", // Replace with your actual app ID
          },

        }
      );

    //   console.log("User created:", response.data);
    } catch (error) {
      console.error("Error creating user:", error.message);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={newUser.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={newUser.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserList;
