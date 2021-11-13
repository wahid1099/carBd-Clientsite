import React from 'react';
import {Container,Row,Col,Card} from "react-bootstrap";
import { VscSettingsGear } from "react-icons/vsc";
import { AiOutlineFileProtect } from "react-icons/ai";
import { MdBolt } from "react-icons/md";
const Aboutus = () => {
    return (
        <div>
            <Container>
                <h2>About Us</h2>
                <h2 className="pt-2">Wellcome To HVAC Auto Online<br/>
                    We Provide Everything You Need To A Car</h2>
                <h5 className="text-black-50 mt-2">First I will explain what contextual advertising is. Contextual advertising means the advertising of products on a website according to
                    the content the page is displaying. For example if the content of a website was information on a Ford truck then the advertisements</h5>

                <Row xs={1} md={3} className="g-4 mt-5">

                        <Col>
                            <Card className="border-0">
                             <VscSettingsGear style={{width:'50px',height:'50px',margin:'0 auto'}}/>
                                <Card.Body>
                                    <Card.Title><h3>Infrastructure Integration Technology</h3>
                                    </Card.Title>
                                    <Card.Text>
<h6>                                        So in final analysis: it’s true, I hate peeping Toms, but if I had to choose, I’d take one any day over an
</h6>                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                        <Card className="border-0">
                            <AiOutlineFileProtect style={{width:'50px',height:'50px',margin:'0 auto'}}/>
                            <Card.Body>
                                <Card.Title><h3>Accurate Testing Processes</h3></Card.Title>
                                <Card.Text><h6>So in final analysis: it’s true, I hate peeping Toms, but if I had to choose, I’d take one any day over an
                                    </h6></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0">
                            <MdBolt style={{width:'50px',height:'50px',margin:'0 auto'}}/>
                            <Card.Body>
                                <Card.Title><h3>Quality Assurance System</h3></Card.Title>
                                <Card.Text><h6>It seems though that some of the biggest problems with the internet advertising trends are the lack of
                                </h6></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default Aboutus;