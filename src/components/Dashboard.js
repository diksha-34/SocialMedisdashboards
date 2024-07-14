import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

const Dashboard = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users); // Correctly map state

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    console.log('Users from Redux State:', users); // Debug log

    return (
        <div>
            <h1>Social Media Analytics Dashboard</h1>
            {Array.isArray(users) && users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <p>Name: {user.name}</p>
                            <p>Category: {user.category}</p>
                            <p>Bio: {user.bio}</p>
                            <p>Contact: {user.contactOptions}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
};

export default Dashboard;
