import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cover from '../assets/wallpaper3.jpg'
import aws from '../assets/aws-logo-white.png'
import cisco from '../assets/cisco-logo-white.png'
import vmware from '../assets/vmware-logo-white.png'
import redhat from '../assets/red-hat-logo-white.png'
import Microsoft from '../assets/microsoft-logo-white.png'
import ibm from '../assets/ibm-logo-white.png'






const WhyUs = () => {
    return(
    <div className = "">
        <Row className='border'>
            <Col className='border'>
                <div className='border cover-img'>
                    <img src = {cover} alt='cover-img' />
                </div>
            </Col>
            <Col className='border why-us-right pt-4 pb-4'>
                <div className='border'>
                    <h2 className='text-white'>The world's top educational institutions have <span className='text-bold'>accredited our courses</span></h2>   
                    <p className='mt-4 text-white'>Our courses, materials, and trainers have received accreditation from prominent organizations such as AXELOS, APMG, BCS, PeopleCert, CompTIA, and Microsoft. This certification ensures that our training meets the rigorous standards set by these leading bodies.</p>
                </div>
                <div className='border brands-logo'>
                    <Row className='border'>
                        <Col className='border'>
                            <img src={aws} alt = 'aws' />
                        </Col>
                        <Col className='border'>
                            <img src={ibm} alt = 'aws' />
                        </Col>
                        <Col className='border'>
                            <img src={vmware} alt = 'aws' />
                        </Col>
                        <Col className='border'>
                            <img src={Microsoft} alt = 'aws' />
                        </Col>
                    </Row>
                    <Row className='border mt-4'>
                        <Col className='border'>
                            <img src={cisco} alt = 'aws' />
                        </Col>
                        <Col className='border'>
                            <img src={redhat} alt = 'aws' />
                        </Col>
                        <Col className='border'></Col>
                        <Col className='border'></Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </div>)
}
export default WhyUs