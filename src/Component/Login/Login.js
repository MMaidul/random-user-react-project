import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

const Login = () => {
    const [login, setLogin] = useState(false);
    const [confirmError, setConfirmError] = useState('');
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleInput = e => {
        userInfo[e.target.name] = e.target.value;

    }
    const handleSubmit = e => {
        e.preventDefault();
        if (userInfo.password !== userInfo.confirmPassword) {
            setConfirmError(`password can't match`);
            return;
        }
        if (!login) {
            setConfirmError('')
            createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        }

    }
    return (
        <div className='container'>
            <div className="w-50 mx-auto mt-5">
                <Form onSubmit={handleSubmit}>
                    <h3 className='text-primary py-2'>
                        {
                            login ? 'Login' : 'Register'
                        }
                    </h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            onBlur={(e) => handleInput(e)}
                            name='email'
                            type="text"
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onBlur={(e) => handleInput(e)}
                            name='password'
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Group>
                    {
                        !login && <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                onBlur={(e) => handleInput(e)}
                                name='confirmPassword'
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                    }
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                        onChange={() => setLogin(!login)}
                    >
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button
                        className='w-100'
                        variant="primary"
                        type="submit"
                    >
                        {login ?
                            'Login'
                            :
                            'Register'
                        }
                    </Button>
                    <h6 className='text-danger mt-2'>{confirmError}</h6>
                    {
                        createError && <p className='text-danger'>{createError.message}</p>
                    }
                    {
                        createUser && <p className='text-success'>User Create Successfully</p>
                    }
                </Form>
            </div>
        </div>
    );
};

export default Login;