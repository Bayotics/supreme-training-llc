import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../assets/aboutus.jpg'


const AboutUs = () => {
    return (
        <div>
            <Row>
                <Col>
                    <h2>About Us.</h2>
                    <p className='lh-base text-secondary' style={{marginTop: "30px"}}>
                       Welcome to Supreme training, a leading provider of comprehensive and cutting-edge IT training solutions. We are dedicated to empowering individuals and organizations with the knowledge and skills needed to thrive in today's dynamic technology landscape.
                       At Supreme training, we understand that technology is evolving at an unprecedented pace, and staying ahead requires continuous learning and development. That's why we offer a wide range of training programs designed to meet the needs of beginners, experienced professionals, and organizations seeking to enhance their IT capabilities.
                       Our team of experienced and certified instructors brings a wealth of industry knowledge and expertise to the training programs.
                       They are passionate about sharing their knowledge and guiding students through practical exercises and real-world scenarios, ensuring that the concepts learned can be applied effectively in professional settings.
                    </p>
                </Col>
                <Col>
                    <img style={{height: '100%', width: '100%'}} src={about}  alt='about' />   
                </Col>
            </Row>
        </div>
    )
}
export default AboutUs