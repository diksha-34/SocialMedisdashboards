import React from 'react';

const UserDetails = ({ user }) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Category: {user.category}</p>
            <p>Bio: {user.bio}</p>
            <p>Contact Options: {user.contactOptions}</p>
            <p>Links: {user.links}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Posts: {user.posts}</p>
        </div>
    );
};

export default UserDetails;
