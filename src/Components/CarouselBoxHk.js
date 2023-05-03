import {Carousel} from "react-bootstrap";

import ImgOne from '../assets/ForestOne.jpg';
import ImgTwo from '../assets/ForestTwo.jpg';
import ImgThree from '../assets/ForestThree.jpg';

import React, {Component} from 'react';

class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{height: '650px'}}
                        className="d-block w-100"
                        src={ImgOne}
                        alt="Forest"/>
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p> Далі, далі від душного міста! Серце прагне буять на просторі! Бачу здалека, – хвиля іскриста
                            грає вільно по синьому морі.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{height: '650px'}}
                        className="d-block w-100"
                        src={ImgTwo}
                        alt="Forest"/>
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p> Далі, далі від душного міста! Серце прагне буять на просторі! Бачу здалека, – хвиля іскриста
                            грає вільно по синьому морі.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        style={{height: '650px'}}
                        className="d-block w-100"
                        src={ImgThree}
                        alt="Forest"/>
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p> Далі, далі від душного міста! Серце прагне буять на просторі! Бачу здалека, – хвиля іскриста
                            грає вільно по синьому морі.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBoxHk;