import React from 'react';
import { Link } from 'react-router-dom';
import useUser from '../../../hook/useUser/useUser';
import SingleUser from '../../SingleUser/SingleUser';

const Home = () => {
    const usersData = useUser(`https://jsonplaceholder.typicode.com/users`);
    if (usersData.length) {
        usersData.length = 4;
        console.log(usersData.length);
        console.log(usersData);
    }

    return (
        <div className='container'>
            <h2>All user:{usersData.length}</h2>
            <div className="row">
                {
                    usersData.map(userData => <SingleUser
                        key={userData}
                        userData={userData}
                    />
                    )
                }
            </div>
            <Link to='/user'>
                <h4>Load More...</h4>
            </Link>
        </div>
    );
};

export default Home;