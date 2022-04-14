import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleUser = ({ userData, children }) => {
    const { name, id } = userData || {};
    const { email, phone } = children || {};
    return (
        <div className='col-md-4'>
            <Card className='shadow-sm p-3 mb-5 bg-body rounded'>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">id:{id}</Card.Subtitle>
                    <Card.Text>{email}</Card.Text>
                    <Card.Text>{phone}</Card.Text>
                    <Link to={`/user/${id}`}>Card Link</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleUser;