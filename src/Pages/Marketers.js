import React, {Component} from 'react';
import {Container} from "react-bootstrap";

class Marketers extends Component {
    render() {
        return (
            <>
                <Container>
                    <h5 className="text-center" style={{fontSize: '45px', fontWeight: 'bold'}}>Marketers</h5>
                    <div className="d-flex align-items-center me-5">
                        <div className="flex-grow-1 ms-3 " style={{paddingTop: '60px'}}>
                            <p style={{fontSize: '24px'}}>Marketers are the backbone of any successful business.<br/>
                                They are the ones responsible for creating and executing strategies to reach potential
                                customers and grow a company's brand. A career in marketing
                                requires a combination of creativity, analytical skills, and communication
                                abilities.</p>
                        </div>
                        <div className="flex-shrink-0">
                            <img
                                style={{paddingTop: '50px'}}
                                width={400}
                                height={300}
                                className="mr-3"
                                src="https://assets-global.website-files.com/6294b12fe96345a83876d4a5/62d6c03db1424cd2018aeff8_brand-manager-header.png"
                                alt="photo"/>
                        </div>
                    </div>

                    <div className="d-flex align-items-center me-5">
                        <div className="flex-shrink-0">
                            <img
                                style={{paddingTop: '50px'}}
                                width={400}
                                height={300}
                                className="mr-3"
                                src="https://brainrain.com.ua/wp-content/uploads/2021/08/marketing-team.jpg"
                                alt="photo"/>
                        </div>
                        <div className="flex-grow-1 ms-3 " style={{paddingTop: '60px'}}>
                            <p style={{fontSize: '24px'}}>Overall, marketers play a crucial role in helping businesses
                                connect with their target audiences and grow their brand.<br/> A career in marketing
                                offers
                                a dynamic and challenging work environment, with opportunities to use your creativity
                                and analytical skills to make a meaningful impact.</p>
                        </div>
                    </div>
                </Container>
            </>
        );
    }
}

export default Marketers;