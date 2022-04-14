import React from 'react';
import { Link } from 'react-router-dom';
import useUser from '../../../hook/useUser/useUser';
import SingleUser from '../../SingleUser/SingleUser';

const Home = () => {
    const usersData = useUser(`https://jsonplaceholder.typicode.com/users`);
    if (usersData.length) {
        usersData.length = 6;
        console.log(usersData.length);
        console.log(usersData);
    }

    return (
        <div className='container mt-5'>
            <div className="row">
                {
                    usersData.map(userData => <SingleUser
                        key={userData.id}
                        userData={userData}
                    />
                    )
                }
            </div>
            <Link to='/user'>
                <button className='btn btn-primary px-5'> <h4>Load More...</h4></button>
            </Link>
        </div>
    );
};

export default Home;