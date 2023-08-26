import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';


const Testimonials = () => {
    return (
        <div className="mt-4 testimonials-section text-white">
            <h5 className='text-center text-black text-bold'>TESTIMONIALS</h5>
            <div id='testimonial-cap'>
                <h1 className='text-center text-black text-bold'>We are dedicated and knowledgeable collaborators.</h1>
                <h6 className='text-center text-black'>At our company, we greatly recognize that customer feedback is essential in guiding us towards improvement and ensuring we deliver the best possible service.</h6>
            </div>
            <Row className='gap-4' id='main-testimonial-cards'>
                <Col className='testimonial-card-main' id='testimonial-card-main'>
                    <div className='text-center testimonial-card'>
                         <div className='d-flex justify-content-center' id = "testimonial-pfp">
                            <img src={client1} alt='client1' id= "testimonial-pic"
                                style={{borderRadius: "50%"}}
                            />
                        </div>
                        <div id='testimonial-text'>
                            <p>
                                <span>
                                    <i className="fa fa-quote-left" aria-hidden="true"></i></span>I have had an incredible experience with supreme training. The courses are well-structured, engaging, and taught by industry experts. Thanks to their user-friendly platform, I was able to balance learning with my busy schedule. I highly recommend their services to anyone seeking to upskill or advance their career!" - 
                                <i className="fa fa-quote-right" aria-hidden="true"></i>
                            </p>
                        </div>
                        <p className='text-center text-bold'> Jane</p>
                        {/* <p className='text-center'>Product Manager Cashfree</p> */}
                    </div>
                </Col>
                <Col className='testimonial-card-main' id='testimonial-card-main-two'>
                    <div className='text-center testimonial-card'>
                         <div className='d-flex justify-content-center' id = "testimonial-pfp">
                            <img src={client2} alt='client1' id= "testimonial-pic"
                                style={{borderRadius: "50%"}}
                            />
                        </div>
                        <div id='testimonial-text'>
                            <p>
                                <span>
                                    <i className="fa fa-quote-left" aria-hidden="true"></i></span>I am delighted with the quality of training I received from supreme .The customer service team was prompt and helpful in addressing any queries. I am genuinely grateful for the positive impact this training has had on my AWS career growth
                                <i className="fa fa-quote-right" aria-hidden="true"></i>
                            </p>
                        </div>
                        <p className='text-center text-bold'>Olivia</p>
                        {/* <p className='text-center'>Db Administrator</p> */}
                    </div>
                </Col>
                <Col className='testimonial-card-main' id='testimonial-card-main-three'>
                    <div className='text-center testimonial-card'>
                         <div className='d-flex justify-content-center' id = "testimonial-pfp">
                            <img src={client3} alt='client1' id= "testimonial-pic"
                                style={{borderRadius: "50%"}}
                            />
                        </div>
                        <div id='testimonial-text'>
                            <p>
                                <span>
                                    <i className="fa fa-quote-left" aria-hidden="true"></i></span>I couldn't be happier with the CISA certification I earned through this training company. The variety of courses offered allowed me to explore different fields and choose the ones that aligned with my interests. The learning materials are top-notch, and the interactive exercises make learning enjoyable.  
                                <i className="fa fa-quote-right" aria-hidden="true"></i>
                            </p>
                        </div>
                        <p className='text-center text-bold'>Ella</p>
                        {/* <p className='text-center'>Backend developer</p> */}
                    </div>
                </Col>
                <Col className='testimonial-card-main' id='testimonial-card-main-four'>
                    <div className='text-center testimonial-card'>
                         <div className='d-flex justify-content-center' id = "testimonial-pfp">
                            <img src={client1} alt='client1' id= "testimonial-pic"
                                style={{borderRadius: "50%"}}
                            />
                        </div>
                        <div id='testimonial-text'>
                            <p>
                                <span>
                                    <i className="fa fa-quote-left" aria-hidden="true"></i></span>I highly recommend supreme training to anyone looking to enhance their expertise. As a seasoned professional, I was initially skeptical about online learning, but this platform exceeded my expectations. The courses were challenging yet manageable, and the real-world applications helped me apply my knowledge immediately. 
                                <i className="fa fa-quote-right" aria-hidden="true"></i>
                            </p>
                        </div>
                        <p className='text-center text-bold'>Lizzy</p>
                        {/* <p className='text-center'>Product manager</p> */}
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Testimonials