import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';


const Testimonials = () => {
    return (
        <div className="mt-4 testimonials-section text-white">
            <Row>
                <Col>
                    <div className='testimonial-inner'>
                        <h2>TESTIMONIALS</h2>
                        <p className='text-light mt-0'>Here are testimonials from some of our clients...</p>
                        <div className='testimonials-carousel'>
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <div className='row'>
                                        <div className='col-4' id = "testimonial-pfp">
                                            <img src={client1} alt='client1'
                                                 style={{borderRadius: "50%"}}
                                            />
                                        </div>
                                        <div className='col-8'>
                                            <p className='test-p'>You guys rock at supreme! Thank you for making it painless, pleasant and most of all hassle free!I am really satisfied with my first IT certification</p>
                                            <h6 className='mt-2 test-name'>Maya</h6>
                                            <h6 className='mt-2 test-country'>ONTARIO, CANADA</h6>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={1000}>
                                    <div className='row'>
                                        <div className='col-4' id = "testimonial-pfp">
                                            <img src={client2} alt='client1'
                                                 style={{borderRadius: "50%"}}
                                            />
                                        </div>
                                        <div className='col-8'>
                                            <p className='test-p'>You prepare people to carry out skills in the real world. Keep up the good work. What I have learned in this course, I will be able to apply in the real world.</p>
                                            <h6 className='mt-2 test-name'>Cristine</h6>
                                            <h6 className='mt-2 test-country'>NEW YORK, USA</h6>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className='row'>
                                        <div className='col-4' id = "testimonial-pfp">
                                            <img src={client3} alt='client1'
                                                 style={{borderRadius: "50%"}}
                                            />
                                        </div>
                                        <div className='col-8'>
                                            <p className='test-p'>The class is almost identical to a graduate level course I took at a well known University in Boston, Massachusetts.</p>
                                            <h6 className='mt-2 test-name'>Amy</h6>
                                            <h6 className='mt-2 test-country'>MANCHESTER, UK</h6>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div> 
                    </div>
                </Col>
                <Col id= "testimonial-right">
                </Col>
            </Row>
        </div>
    )
}
export default Testimonials