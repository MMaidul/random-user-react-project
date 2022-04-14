import React from 'react';
import { useParams } from 'react-router-dom';
import useUser from '../../hook/useUser/useUser';
import SingleUser from '../SingleUser/SingleUser';

const UserInfo = () => {
    const { userId } = useParams();
    const allUsers = useUser(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
    console.log(allUsers[0]);

    return (
        <div className='container mt-5'>
            <SingleUser userData={allUsers[0]}>
                {
                    { email: allUsers[0]?.email, phone: allUsers[0]?.phone }
                }
            </SingleUser>
        </div>
    );
};

export default UserInfo;