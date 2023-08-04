import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../assets/aboutus.jpg'
import { Link } from 'react-router-dom';


const AboutUs = () => {
    return (
        <div>
            <Row id='about-inner-div'>
                <Col sm = {7} id = "about-text" className=''>
                    <div className='' id = "about-text-box">
                        <h1>Acquire the skills to <span className='text-bold'>maintain a competitive edge in IT.</span></h1>
                    </div>
                    <div className="container about-wordings">
                        <div className="row row-main">
                            <div className="col budget-cover">
                                <div className='row'>
                                    <div className='col-3 ' id='budget-pic'>
                                    <i className="fa fa-money fa-3x" aria-hidden="true"></i>
                                    </div>
                                    <div className='col-9 skills-p'>
                                        <h6 className='text-bold'>Optimized Budget</h6>
                                        <p className='about-text-box-p'>Our IT training subscriptions offer convenient access to on-demand learning from top technology providers, all at discounted rates</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col ">
                                <div className="col ">
                                    <div className='row'>
                                        <div className='col-3' id='budget-pic'>
                                        <i className="fa fa-file fa-3x" aria-hidden="true"></i>
                                        </div>
                                        <div className='col-9 skills-p'>
                                            <h6 className='text-bold'>Extensive course collection</h6>
                                            <p className='about-text-box-p'>vast and diverse selection of IT courses and training materials that cover a wide range of topics and skills in the field of IT</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 white-space-vertical mt-8"></div>
                                <div className="col">
                                    <div className="col">
                                        <div className='row'>
                                            <div className='col-3' id='budget-pic'>
                                            <i className="fa fa-calendar fa-3x" aria-hidden="true"></i>
                                            </div>
                                            <div className='col-9 skills-p'>
                                                <h6 className='text-bold'>Best training Schedule</h6>
                                                <p className='about-text-box-p'>Choose the date, location, and delivery format that best fits your Schedule, and enroll with assurance.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="col">
                                <div className="col">
                                    <div className='row'>
                                        <div className='col-3' id='budget-pic'>
                                        <i className="fa Example of graduation-cap fa-graduation-cap fa-3x" aria-hidden="true"></i>
                                        </div>
                                        <div className='col-9 skills-p'>
                                            <h6 className='text-bold'>Experienced and Skilled trainers</h6>
                                            <p className='about-text-box-p'>We exclusively recruit top-tier trainers from across the world to guarantee seamless and exceptional training for you.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </Col>
                <Col sm = {5} id = "about-card" className=''>
                    <div className=' about-card-inner'>
                        <div className='about-card-texts'>
                            <div className='about-h1'>
                                <h1 className='text-white'>Everything You Need</h1>
                            </div>
                            <div className='about-p'>
                                <p className='text-white'>At Supreme training, we understand that technology is evolving at an unprecedented pace, and staying ahead requires continuous learning and development. That's why we offer a wide range of training programs designed to meet the needs of beginners, experienced professionals, and organizations seeking to enhance their IT capabilities.</p>
                            </div>
                            <div className='about-promo'>
                                <p className=''>We are presently providing discounts of up to 30% on all Online Instructor-led courses. Ensure you take advantage of this opportunity!</p>
                            </div>
                            <div className='about-button mt-4'>
                                <Link to={'/signin'} >
                                    <button className='about-button-btn text-bold'>Register Now!</button>
                                </Link>
                            </div>
                        </div>
                    </div> 
                </Col>
            </Row>
        </div>
    )
}
export default AboutUs