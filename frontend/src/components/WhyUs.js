import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cover from '../assets/wallpaper3.jpg'
import aws from '../assets/aws-logo-white.png'
import cisco from '../assets/cisco-logo-white.png'
import vmware from '../assets/vmware-logo-white.png'
import redhat from '../assets/red-hat-logo-white.png'
import Microsoft from '../assets/microsoft-logo-white.png'
import ibm from '../assets/ibm-logo-white.png'
import google from '../assets/google-logo-white.png'
import oracle from '../assets/oracle-logo-white.png'







const WhyUs = () => {
    return(
    <div className = "">
        <Row className=''>
            <Col className='p-0'>
                <div className=' cover-img '>
                    <img src = {cover} alt='cover-img' />
                </div>
            </Col>
            <Col className=' why-us-right pt-4 pb-4'>
                <div className=''>
                    <h2 className='text-white'>The world's top educational institutions have <span className='text-bold'>accredited our courses</span></h2>   
                    <p className='mt-4 text-white'>Our courses, materials, and trainers have received accreditation from prominent organizations such as AWS, IBM, Vmware, Microsoft, CompTIA, Cisco, RedHat, and Google. This certification ensures that our training meets the rigorous standards set by these leading bodies.</p>
                </div>
                <div className=' brands-logo'>
                    <Row className=''>
                        <Col className=''>
                            <img src={aws} alt = 'aws' />
                        </Col>
                        <Col className=''>
                            <img src={ibm} alt = 'aws' />
                        </Col>
                        <Col className=''>
                            <img src={vmware} alt = 'aws' />
                        </Col>
                        <Col className=''>
                            <img src={Microsoft} alt = 'aws' />
                        </Col>
                    </Row>
                    <Row className=' mt-4'>
                        <Col className=''>
                            <img src={cisco} alt = 'aws' />
                        </Col>
                        <Col className=''>
                            <img src={redhat} alt = 'aws' />
                        </Col>
                        <Col className=''>
                            <img src={google} alt = 'aws' />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </div>)
}
export default WhyUs