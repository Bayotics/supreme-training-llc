import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fast from '../assets/si1.png';
import secure from '../assets/si2.png';
import expert from '../assets/si3.png';
import affordable from '../assets/si4.png';
import warranty from '../assets/si5.png';
import award from '../assets/si6.png';


const WhyUs = () => {
    return(
    <div className = "">
        <h1 id = "" style={{marginTop: "60px"}} className='text-center'>
            <span className='theme-color'>WHY </span>US?
        </h1>
        <p className="display-7 text-normal text-center text-muted">Fastest certifications with the best rates</p>
        <div>
            <div className='d-flex justify-content-around'>
                <div className=''>
                    <img src={fast} style={{height: "100px", width: "100px"}} alt = "fast" />
                    <h5 className='mt-4'>Swift Services</h5>
                    <div className='mt-4' style={{height: "100px", width: "190px"}}>
                        <p style={{fontSize: '13px'}} className='text-left text-secondary'>Our trainings are concise and straight to the point. 
                        Get certified within few weeks of training</p>
                    </div>
                </div>
                <div className=''>
                    <img src={secure} style={{height: "100px", width: "100px"}} alt = "fast" />
                    <h5 className='mt-4'>Expert training team</h5>
                    <div className='mt-4' style={{height: "100px", width: "190px"}}>
                        <p style={{fontSize: '13px'}} className='text-left text-secondary'>
                            Our highly skilled trainers will share their knowledge and guide you all through the training
                            process
                        </p>
                    </div>
                </div>
                <div className=''>
                    <img src={expert} style={{height: "100px", width: "100px"}} alt = "fast" />
                    <h5 className='mt-4'>Secure Payments</h5>
                    <div className='mt-4' style={{height: "100px", width: "190px"}}>
                        <p style={{fontSize: '13px'}} className='text-left text-secondary'>
                            Every payment on our platform is logged and transparent to you.
                            100% money back guaranteed incase of a failed payment
                        </p>
                    </div>
                </div>
            </div>
            <div className='team-main d-flex justify-content-around'>
                <div className=''>
                    <img src={affordable} style={{height: "100px", width: "100px"}} alt = "fast" />
                    <h5 className='mt-4'>Discounted Services</h5>
                    <div className='mt-4' style={{height: "100px", width: "190px"}}>
                        <p style={{fontSize: '13px'}} className='text-left text-secondary'>
                            we offer training to highly productive courses at the best, pocket friendly rates 
                        </p>
                    </div>
                </div>
                <div className=''>
                    <img src={warranty} style={{height: "100px", width: "100px"}} alt = "fast" />
                    <h5 className='mt-4'>Highly Profitable Courses</h5>
                    <div className='mt-4' style={{height: "100px", width: "190px"}}>
                        <p style={{fontSize: '13px'}} className='text-left text-secondary'>
                            we offer a wide range of training programs designed to enhance your IT capabilities and build your portfolio
                        </p>
                    </div>
                </div>
                <div className=''>
                    <img src={award} style={{height: "100px", width: "100px"}} alt = "fast" />
                    <h5 className='mt-4'>Award winning</h5>
                    <div className='mt-4' style={{height: "100px", width: "190px"}}>
                        <p style={{fontSize: '13px'}} className='text-left text-secondary'>
                            we are a brand that has been recognized by top tech organisations on multiple occasions for our services. Our works speak for us 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default WhyUs