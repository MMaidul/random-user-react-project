import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const [login, setLogin] = useState(false);
    return (
        <div className='container'>
            <div className="w-50 mx-auto mt-5">
                <Form>
                    <h3 className='text-primary py-2'>
                        {
                            login ? 'Login' : 'Register'
                        }
                    </h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    {
                        !login && <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    }
                    <Form.Group className="mb-3" controlId="formBasicCheckbox" onChange={() => setLogin(!login)}>
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        {login ?
                            'Login'
                            :
                            'Register'
                        }
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;