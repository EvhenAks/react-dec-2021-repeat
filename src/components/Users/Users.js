import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";
import User from "../User/User";

const Users = () => {
    const [users, serUsers] = useState(null)
    useEffect(() => {
        usersService.getAllUsers().then(value => serUsers(value));
    }, [])

    return (
        <div>
            {
                users && users.map((user) => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;