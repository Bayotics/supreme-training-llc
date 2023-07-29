import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../assets/aboutus.jpg'


const AboutUs = () => {
    return (
        <div>
            <Row>
                <Col sm = {8} id = "about-text" className='border'>
                    <div className='border' id = "about-text-box">
                        <h1>Acquire the skills to <span className='text-bold'>maintain a competitive edge in IT.</span></h1>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col border">
                                <div className='row'>
                                    <div className='col-3 border' id='budget-pic'>
                                    <i class="fa fa-money fa-3x" aria-hidden="true"></i>
                                    </div>
                                    <div className='col-9 border'>
                                        <h6 className='text-bold'>Optimized Budget</h6>
                                        <p className='about-text-box-p'>Our IT training subscriptions offer convenient access to on-demand learning from top technology providers, all at discounted rates</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col border">
                                <div class="col border">
                                    <div className='row'>
                                        <div className='col-3 border' id='budget-pic'>
                                        <i class="fa fa-file fa-3x" aria-hidden="true"></i>
                                        </div>
                                        <div className='col-9 border'>
                                            <h6 className='text-bold'>Extensive course collection</h6>
                                            <p className='about-text-box-p'>vast and diverse selection of IT courses and training materials that cover a wide range of topics and skills in the field of IT</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 mt-8"></div>
                                <div class="col border">
                                    <div class="col border">
                                        <div className='row'>
                                            <div className='col-3 border' id='budget-pic'>
                                            <i class="fa fa-money fa-3x" aria-hidden="true"></i>
                                            </div>
                                            <div className='col-9 border'>
                                                <h6 className='text-bold'>Optimized Budget</h6>
                                                <p className='about-text-box-p'>Our IT training subscriptions offer convenient access to on-demand learning from top technology providers, all at discounted rates</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div class="col border">
                                <div class="col border">
                                    <div className='row'>
                                        <div className='col-3 border' id='budget-pic'>
                                        <i class="fa fa-money fa-3x" aria-hidden="true"></i>
                                        </div>
                                        <div className='col-9 border'>
                                            <h6 className='text-bold'>Optimized Budget</h6>
                                            <p className='about-text-box-p'>Our IT training subscriptions offer convenient access to on-demand learning from top technology providers, all at discounted rates</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='border about-bg-btn'>
                        <button className="col btn btn-funky-moon btn-rounded about-btn"><p>Explore ➙</p></button>
                    </div> */}
                    
                </Col>
                <Col sm = {4} id = "about-img" className='border'>
                    
                    <img id='about-pic' style={{height: '100%', width: '100%'}} src={about}  alt='about' /> 
                </Col>
            </Row>
        </div>
    )
}
export default AboutUs