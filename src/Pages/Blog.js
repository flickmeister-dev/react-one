import React, {Component} from 'react';
import {Col, Container, Nav, Row, Card, ListGroup} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


class Blog extends Component {
    render() {
        return (
            <Container>
                <Row style={{paddingTop: '25px'}}>
                    <Col md="9">
                        <Link to="/PostOne" className="btn btn-dark">
                            <div className="d-flex align-items-center me-5">
                                <div className="flex-shrink-0">
                                    <img
                                        width={150}
                                        height={150}
                                        className="mr-3"
                                        src="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="photo"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5>Forest</h5>
                                    <p> It is impossible to imagine a forest without trees, shrubs, mosses, lichens,
                                        mushrooms, animals.
                                        Plants grow in several tiers, just count these tiers from top to bottom.
                                        The tallest trees form the upper tier, a little lower – low-growing trees,
                                        even lower the tier of shrubs and grasses, the lowest tier is occupied by mosses
                                        and lichens. </p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/PostTwo" className="btn btn-primary">
                            <div className="d-flex align-items-center me-5">
                                <div className="flex-shrink-0">
                                    <img
                                        width={150}
                                        height={150}
                                        className="mr-3"
                                        src="https://images.pexels.com/photos/2609106/pexels-photo-2609106.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="photo"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5>Jungle forests</h5>
                                    <p> Rain forest is a collective name for several different forest biomes
                                        located in areas of the Earth with a minimum annual precipitation rate of
                                        1,750-2,000 mm. </p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/PostThree" className="btn btn-dark">
                            <div className="d-flex align-items-center me-5">
                                <div className="flex-shrink-0">
                                    <img
                                        width={150}
                                        height={150}
                                        className="mr-3"
                                        src="https://images.pexels.com/photos/2406395/pexels-photo-2406395.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="photo"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5>Waterfall</h5>
                                    <p> Waterfall - the fall of the water flow of the river from the ledge; a hydrologic
                                        feature created by a steady flow of water, usually a river, that descends from
                                        an
                                        erosion-resistant rock ledge. Waterfalls can also be artificial when they are
                                        created as part of garden art. </p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/PostFour" className="btn btn-primary">
                            <div className="d-flex align-items-center me-5">
                                <div className="flex-shrink-0">
                                    <img
                                        width={150}
                                        height={150}
                                        className="mr-3"
                                        src="https://images.pexels.com/photos/14862819/pexels-photo-14862819.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="photo"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5>Temple of Artemis</h5>
                                    <p>The Temple of Artemis of Ephesus is the third wonder of the world.
                                        Perhaps some will not immediately understand what was amazing in this building.
                                        But we will give some interesting facts that will allow you to give an objective
                                        assessment
                                        of one of the seven wonders of the world. By the way, in the very name lies the
                                        origin of the
                                        famous temple - this is the ancient Greek city of Ephesus.</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Категорії</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3 bg-light">
                            <Card.Body>
                                <Card.Title>Slide widget</Card.Title>
                                <Card.Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci alias
                                    aperiam asperiores dicta illo ipsum magnam repudiandae ullam voluptas! Ab amet
                                    itaque nobis quidem quisquam quos recusandae voluptate voluptates!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;