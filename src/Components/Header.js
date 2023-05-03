import React, {useState} from "react";
import logo from "./logo192.png";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";
import Marketers from "../Pages/Marketers";
import Developers from "../Pages/Developers";
import Natural from "../Pages/Natural";
import PostOne from "../Pages/PostOne";
import PostTwo from "../Pages/PostTwo";
import {Navbar, Nav, FormControl, Container, Form, Button, Modal} from "react-bootstrap";


export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не може бути порожнім');
    const [passwordError, setPasswordError] = useState('Пароль не може бути порожнім');
    const [formValid, setFormValid] = useState(false);


    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value.toLowerCase()))) {
            setEmailError('Некоректний email');
        } else {
            setEmailError('');
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 3 || e.target.length > 8) {
            setPasswordError('Пароль повинен мати не менше 3 і не більше 8 символів');
            if (!e.target.value) {
                setPasswordError('Пароль не може бути порожнім');
            }
        } else {
            setPasswordError('');
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
        }
    }


    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />{" "}
                        React Site
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav claccName="me-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                            <Nav.Link href="/blog"> Blog </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Form className="d-flex d-flex justify-content-end">
                        <FormControl type="text" placeholder="Search" className="me-sm-3"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                    <Button className="ms-2" onClick={handleShow}>
                        Login
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Log in</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="fromBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
                                    <Form.Control onChange={e => emailHandler(e)} name="email" value={email}
                                                  onBlur={e => blurHandler(e)} type="email" placeholder="Enter email"/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="fromBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    {(passwordError && passwordDirty) &&
                                        <div style={{color: "red"}}>{passwordError}</div>}
                                    <Form.Control onChange={e => passwordHandler(e)} name="password" value={password}
                                                  onBlur={e => blurHandler(e)} type="password"
                                                  placeholder="Enter password"/>
                                </Form.Group>
                                <Form.Group controlId="fromBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me"/>
                                </Form.Group>
                                <Button disabled={!formValid} variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>

                </Container>
            </Navbar>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/marketers" element={<Marketers/>}/>
                    <Route path="/developers" element={<Developers/>}/>
                    <Route path="/natural scientists" element={<Natural/>}/>
                    <Route path="/PostOne" element={<PostOne/>}/>
                    <Route path="/PostTwo" element={<PostTwo/>}/>
                </Routes>
            </Router>
        </>
    );
}
