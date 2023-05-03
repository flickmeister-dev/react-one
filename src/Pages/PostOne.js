import React, {Component} from 'react';
import {Container} from "react-bootstrap";

class PostOne extends Component {
    render() {
        return (
            <>
                <Container>
                    <div className="d-flex align-items-center me-5">
                        <div className="flex-shrink-0">
                            <img
                                style={{paddingTop: '50px'}}
                                width={600}
                                height={600}
                                className="mr-3"
                                src="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="photo"/>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5 style={{fontSize: '60px', fontWeight: 'bold'}}>Forest</h5>
                            <p style={{fontSize: '17px'}}> Life in the forest has always been beautiful and alluring.
                                Each season gives its own
                                charm and magic. Nothing changes as quickly as the colors of the trees in the forest. In
                                autumn, when the leaves become multi-colored and soft, the forest turns into a picture
                                that fascinates with its beauty and mystery.<br/>

                                The forest is a place where you can feel part of nature, where you can feel alive again
                                and connected to what really matters. Many species of animals that live in harmony with
                                the environment find their home here.<br/>

                                Peace and quiet always reign in the forest. This is a place where you can feel free and
                                independent. Here you can find answers to many questions that you ask yourself in
                                everyday life. The forest provides an opportunity to relax, rest and recharge energy for
                                further journeys of life.<br/>

                                Also, in the forest you can find many interesting plants and mushrooms that have
                                medicinal properties. Here you can find natural products and materials that can be
                                useful in everyday life.<br/>

                                The forest is a place that can be described endlessly. Therefore, if you have the
                                opportunity, be sure to visit the forest and immerse yourself in its mysterious
                                world. </p>
                        </div>
                    </div>
                </Container>
            </>
        );
    }
}

export default PostOne;