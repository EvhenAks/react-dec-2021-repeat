import './user.css'
import React from 'react';

const User = ({user}) => {
    return (
        <div className={'red'}>
            <span>{user.name}</span>
            <span>{user.username}</span>
            <span>{user.email}</span>
            <hr/>
        </div>
    );
};

export default User;