import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="#home">
                        Random User
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <CustomLink to="/home">Home</CustomLink>
                            <CustomLink to="/user">User</CustomLink>
                            <CustomLink to="/login">Login</CustomLink>
                        </Nav>
                        <span className='text-white'>
                            user
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;