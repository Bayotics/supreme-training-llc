import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet-async';
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'
import cart5 from '../assets/hero-7.jpg';
import cart2 from '../assets/hero-8.jpg';
import cart4 from '../assets/cart4.jpg'

const AboutScreen = () => {
    return(
        <div>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <Card style={{height: '200px', marginTop: '10px'}}
                className="text-center"
                id='main-banner'>
                <Card.Body style={{marginTop: '60px'}}>
                    <span><h1 className='text-white fs-1'>About Us</h1></span>
                </Card.Body>
            </Card>
            <Row style={{height: '200px', marginTop: '90px'}} id = "about-row">
                <Col>
                    <h4>Our Vision</h4>
                    <p className='text-muted'>Our vision is to be the most customer-centric company, 
                    where customers can find and
                    discover anything they might want to buy online.</p>
                </Col>
                <Col>
                    <h4>Our Mission</h4>
                    <p className='text-muted'>At Supreme training, our mission is to bridge the skills gap and foster professional growth by delivering high-quality IT training programs. We aim to equip our students with practical, hands-on experience and industry-recognized certifications that enhance their career prospects and contribute to their overall success...</p>
                </Col>
            </Row>
                <hr className="featurette-divider" />

                {/* <div className="row featurette ">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Fast and Easy Payments.</h2>
                        <p className="lead">Make Payments for your favorite products with ease. Any time, wherever you are in the world</p>
                    </div>
                    <div className="col-md-5">
                        <div className='border'>
                            <img src = {cart2} alt = "cart1" style={{height: '500px', width: '100%'}} />
                        </div>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">Best Prices<span className="text-body-secondary"></span></h2>
                        <p className="lead">Every Product in our store is at a discounted price. You won't find them that Cheap anywhere</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <div className='border'>
                            <img src = {cart5} alt = "cart1" style={{height: '500px', width: '100%'}} />
                        </div>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Swift Delivery</h2>
                        <p className="lead">We deliver swiftly to over 100 countries around the world.
                        We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt</p>
                    </div>
                    <div className="col-md-5">
                        <div className='border'>
                            <img src = {cart4} alt = "cart1" style={{height: '500px', width: '100%'}} />
                        </div>
                    </div>
                </div>
                <hr className="featurette-divider" /> */}

                <h3 className='text-center about-screen-header'>Meet Our Team</h3>
                <div className='row team-main'>
                    <div className='col text-center'>
                        <div className="team-circle">
                            <img src={about3} 
                             style={{height: '250px', width: '250px', borderRadius: '50%', marginTop: '15px'}}
                             alt = "about-one" />
                        </div>
                        <h2 id="team-title" className="fw-normal">Uncle bayo</h2>
                        <p id="team-title" >Team Lead</p>
                    </div>
                    <div className='col text-center'>
                        <div className="team-circle">
                            <img src={about1}
                             style={{height: '250px', width: '250px', borderRadius: '50%', marginTop: '15px'}} 
                             alt = "about-one" />
                        </div>
                        <h2  id="team-title"className="fw-normal">Bayospending</h2>
                        <p id="team-title">Product manager</p>
                    </div>
                    <div className='col text-center'>
                        <div className="team-circle">
                            <img src={about2} 
                            style={{height: '250px', width: '250px', borderRadius: '50%', marginTop: '15px'}} 
                            alt = "about-one" />
                        </div>
                        <h2  id="team-title"className="fw-normal">Mr Kareem</h2>
                        <p id="team-title">Head tutor</p>
                    </div>
                </div>
</div>

    )
}
export default AboutScreen