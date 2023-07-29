import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../assets/aboutus.jpg'


const AboutUs = () => {
    return (
        <div>
            <Row>
                <Col sm = {8} id = "about-text" className='border'>
                    <div className='border' id = "about-text-box">
                        <h1>Acquire the skills to accelerate and maintain a competitive edge in IT.</h1>
                    </div>
                    <div className='border about-bg-btn'>
                        <button className="col btn btn-funky-moon btn-rounded about-btn"><p>Explore ➙</p></button>
                    </div>
                    
                </Col>
                <Col sm = {4} id = "about-img" className='border'>
                    
                    <img id='about-pic' style={{height: '100%', width: '100%'}} src={about}  alt='about' /> 
                </Col>
            </Row>
        </div>
    )
}
export default AboutUs