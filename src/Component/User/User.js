import React from 'react';
import useUser from '../../hook/useUser/useUser';
import SingleUser from '../SingleUser/SingleUser';

const User = () => {
    const allUsers = useUser(`https://jsonplaceholder.typicode.com/users`);
    return (
        <div className="container">
            <div className='row'>
                {
                    allUsers?.map(userData => <SingleUser
                        key={userData}
                        userData={userData}
                    />)
                }
            </div>
        </div>
    );
};

export default User;