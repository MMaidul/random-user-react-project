import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleUser = ({ userData }) => {
    const { name, id } = userData || {};
    return (
        <div className='col-md-4'>
            <Card className='shadow-sm p-3 mb-5 bg-body rounded'>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">id:{id}</Card.Subtitle>
                    <Link to='/'>Card Link</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleUser;