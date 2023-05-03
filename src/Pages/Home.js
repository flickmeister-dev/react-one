import React, {Component} from 'react';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link, Switch} from "react-router-dom";
import CarouselBoxHk from "../Components/CarouselBoxHk";


class Home extends Component {
    render() {
        return (
            <>
                <div>

                    <CarouselBoxHk/>
                    <Container>
                        <h2 className="text-center m-4">Our team</h2>
                        <div className="row">
                            <div className="col">
                                <Card className="m-4 text-center" bg="light" border="primary">
                                    <Card.Img variant="top"
                                              src="https://cdn.vox-cdn.com/thumbor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Developers</Card.Title>
                                        <Card.Text>Команда 1</Card.Text>
                                        <Link to="/developers" className="btn btn-primary">About team</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col">
                                <Card className="m-4 text-center" bg="light">
                                    <Card.Img variant="top"
                                              src="https://cdn.vox-cdn.com/thumbor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Природознавці</Card.Title>
                                        <Card.Text>Команда 2</Card.Text>
                                        <Link to="/natural" className="btn btn-primary">About team</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col">
                                <Card className="m-4 text-center" bg="light">
                                    <Card.Img variant="top"
                                              src="https://www.kv.by/sites/default/files/pictures/userpictures/2019/11/29/2359/foto6_1.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Маркетилоги</Card.Title>
                                        <Card.Text>Команда 3</Card.Text>
                                        <Link to="/marketers" className="btn btn-primary">About team</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Container>
                </div>
            </>
        );
    }
}


export default Home;
