import Carousel from 'react-bootstrap/Carousel';
import alibaba from '../assets/alibaba.png';
import aws from '../assets/aws.png';
import azure from '../assets/azure.png';
import cisa from '../assets/cisa.png';
import cisco from '../assets/cisco.png';
import comptia from '../assets/comptia.png';
import csm from '../assets/csm.png';
import devops from '../assets/devops.png';
import ibm from '../assets/ibm.png';
import oracle from '../assets/oracle.png';
import pmp from '../assets/pmp.png';
import safe from '../assets/safe.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function ParallaxSlider () {
  return (
    <div>
      <h1 className='text-center'>Trending Courses</h1>
      <Carousel data-bs-theme="dark" className='mt-8'>
      <Carousel.Item>
        <Row className='' id = 'parallax-main'>
          <Col>
            <div id='parallax-item'>
              <div className=" carousel__slide-item-img-link">
                <div className="" id="parallax-inner">
                    <div className="mt-4  parallax-logo">
                        <img className="parallax-img" src={csm} alt = 'alibaba' />
                    </div>
                    <div className="parallax-button">
                        <div className="parallax-button-trending  mt-8">Trending <i className="fa fa-fire" aria-hidden="true"></i></div>
                    </div>
                    <div className="mt-4  parallax-header"> 
                        <h4>Certified ScrumMaster® (CSM®)</h4>
                    </div>
                    <div className=" mt-4 parallax-description">
                        <p>Receive 30 hours of interactive live training from Scrum Alliance Certified Scrum Trainers (CSTs) and obtain 14 (PDUs) and (SEUs)</p>
                    </div>
                    <div className="start-learning-button  pt-2">
                        <Link to={'/product/64cc60fb36d627b872e6f10f'} className = ' start-learning-link nav-link text-dark'>
                            <p className="text-decoration-underline">Start Learning<span><i className="fa fa-trending" aria-hidden="true"></i></span></p> 
                        </Link>
                    </div>
                </div>
            </div>
            </div>
          </Col>
          <Col>
            <div id='parallax-item'>
              <div className=" carousel__slide-item-img-link">
                <div className="" id="parallax-inner">
                    <div className="mt-4  parallax-logo">
                        <img className="parallax-img" src={alibaba} alt = 'alibaba' />
                    </div>
                    <div className="parallax-button">
                        <div className="parallax-button-trending  mt-8">Trending <i className="fa fa-fire" aria-hidden="true"></i></div>
                    </div>
                    <div className="mt-4  parallax-header">
                        <h4> Alibaba Cloud </h4>
                    </div>
                    <div className=" mt-4 parallax-description">
                        <p>Obtain Alibaba cloud certification to authenticate your expertise, and gain acknowledgment and prominence in cloud computing, Big data and Security .</p>
                    </div>
                    <div className="start-learning-button  pt-2">
                        <Link to={'/search?category=Alibaba'} className = 'nav-link text-dark start-learning-link'>
                            <p className="text-decoration-underline">Start Learning<span><i className="fa fa-trending" aria-hidden="true"></i></span></p> 
                        </Link>                    
                    </div>
                </div>
            </div>
            </div>
          </Col>
          <Col>
            <div id='parallax-item'>
              <div className=" carousel__slide-item-img-link">
                <div className="" id="parallax-inner">
                    <div className="mt-4  parallax-logo">
                        <img className="parallax-img" src={aws} alt = 'alibaba' />
                    </div>
                    <div className="parallax-button">
                        <div className="parallax-button-trending  mt-8">Trending <i className="fa fa-fire" aria-hidden="true"></i></div>
                    </div>
                    <div className="mt-4  parallax-header">
                        <h4>AWS</h4>
                    </div>
                    <div className=" mt-4 parallax-description">
                        <p>Through AWS Certification, professionals can demonstrate their cloud expertise, while enabling organizations to construct innovative cloud-focused teams using AWS.</p>
                    </div>
                    <div className="start-learning-button  pt-2">
                        <Link to={'/search?category=AWS'} className = 'nav-link text-dark start-learning-link'>
                            <p className="text-decoration-underline">Start Learning<span><i className="fa fa-trending" aria-hidden="true"></i></span></p> 
                        </Link>                          
                    </div>
                </div>
            </div>
            </div>
          </Col>
        </Row>
      </Carousel.Item>
       <Carousel.Item>
        <Row className='' id = 'parallax-main'>
          <Col>
            <div id='parallax-item'>
              <div className=" carousel__slide-item-img-link">
                <div className="" id="parallax-inner">
                    <div className="mt-4  parallax-logo">
                        <img className="parallax-img" src={azure} alt = 'alibaba' />
                    </div>
                    <div className="parallax-button">
                        <div className="parallax-button-trending  mt-8">Trending <i className="fa fa-fire" aria-hidden="true"></i></div>
                    </div>
                    <div className="mt-4  parallax-header">
                        <h4>Azure</h4>
                    </div>
                    <div className=" mt-4 parallax-description">
                        <p>Azure certification verifies your understanding of cloud services and their implementation on Azure. Aspirants must exhibit a grasp of essential cloud concepts, as well as familiarity with Azure services.</p>
                    </div>
                    <div className="start-learning-button  pt-2">
                        <Link to={'/search?category=Azure'} className = 'nav-link text-dark start-learning-link'>
                            <p className="text-decoration-underline">Start Learning<span><i className="fa fa-trending" aria-hidden="true"></i></span></p> 
                        </Link>                      
                    </div>
                </div>
            </div>
            </div>
          </Col>
          <Col>
            <div id='parallax-item'>
              <div className=" carousel__slide-item-img-link">
                <div className="" id="parallax-inner">
                    <div className="mt-4  parallax-logo">
                        <img className="parallax-img" src={cisa} alt = 'alibaba' />
                    </div>
                    <div className="parallax-button">
                        <div className="parallax-button-trending  mt-8">Trending <i className="fa fa-fire" aria-hidden="true"></i></div>
                    </div>
                    <div className="mt-4  parallax-header">
                        <h4>Certified Information Systems Auditor® (CISA®)</h4>
                    </div>
                    <div className=" mt-4 parallax-description">
                        <p>CISA enables you to demonstrate your expertise and affirm your capability in utilizing a risk-based approach for reporting on audit engagements"</p>
                    </div>
                    <div className="start-learning-button  pt-2">
                        <p className="text-decoration-underline">Start Learning<span><i className="fa fa-trending" aria-hidden="true"></i></span></p> 
                    </div>
                </div>
            </div>
            </div>
          </Col>
          <Col>
            <div id='parallax-item'>
              <div className=" carousel__slide-item-img-link">
                <div className="" id="parallax-inner">
                    <div className="mt-4  parallax-logo">
                        <img className="parallax-img" src={cisco} alt = 'alibaba' />
                    </div>
                    <div className="parallax-button">
                        <div className="parallax-button-trending  mt-8">Trending <i className="fa fa-fire" aria-hidden="true"></i></div>
                    </div>
                    <div className="mt-4  parallax-header">
                        <h4>CISCO</h4>
                    </div>
                    <div className=" mt-8 parallax-description">
                        <p>Cisco career certifications offer valuable and tangible benefits to technology professionals and the organizations that employ them</p>
                    </div>
                    <div className="start-learning-button  pt-2">
                        <Link to={'/search?category=Cisco'} className = 'nav-link text-dark start-learning-link'>
                            <p className="text-decoration-underline">Start Learning<span><i className="fa fa-trending" aria-hidden="true"></i></span></p> 
                        </Link>                     
                    </div>
                </div>
            </div>
            </div>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
       <Row className='' id = 'parallax-main'>
          <Col>
            <div id='parallax-item'>
              <div className=" carousel__slide-item-img-link">
                <div className="" id="parallax-inner">
                    <div className="mt-4  parallax-logo">
                        <img className="parallax-img" src={comptia} alt = 'alibaba' />
                    </div>
                    <div className="parallax-button">
                        <div className="parallax-button-trending  mt-8">Trending <i className="fa fa-fire" aria-hidden="true"></i></div>
                    </div>
                    <div className="mt-4  parallax-header">
                        <h4>CompTIA</h4>
                    </div>
                    <div className=" mt-4 parallax-description">
                        <p>CompTIA certifications are designed for individuals seeking to launch an IT career with practical experience of 9 months to 5 years in the lab or field, or equivalent training.</p>
                    </div>
                    <div className="start-learning-button  pt-2">
                        <Link to={'/search?category=CompTIA'} className = 'nav-link text-dark start-learning-link'>
                            <p className="text-decoration-underline">Start Learning<span><i className="fa fa-trending" aria-hidden="true"></i></span></p> 
                        </Link>                        
                    </div>
                </div>
            </div>
            </div>
          </Col>
          <Col>
            <div id='parallax-item'>
              <div className=" carousel__slide-item-img-link">
                <div className="" id="parallax-inner">
                    <div className="mt-4  parallax-logo">
                        <img className="parallax-img" src={devops} alt = 'alibaba' />
                    </div>
                    <div className="parallax-button">
                        <div className="parallax-button-trending  mt-8">Trending <i className="fa fa-fire" aria-hidden="true"></i></div>
                    </div>
                    <div className="mt-4  parallax-header">
                        <h4>DevOps</h4>
                    </div>
                    <div className=" mt-4 parallax-description">
                        <p>The DevOps training course emphasizes building a solid foundation in diverse DevOps tools such as Git, Jenkins, Docker, Ansible, Kubernetes, Prometheus, Grafana, and Terraform. The training is highly practical</p>
                    </div>
                    <div className="start-learning-button  pt-2">
                        <Link to={'/search?category=DevOps'} className = 'nav-link text-dark start-learning-link'>
                            <p className="text-decoration-underline">Start Learning<span><i className="fa fa-trending" aria-hidden="true"></i></span></p> 
                        </Link>                       
                    </div>
                </div>
            </div>
            </div>
          </Col>
          <Col>
            <div id='parallax-item'>
              <div className=" carousel__slide-item-img-link">
                <div className="" id="parallax-inner">
                    <div className="mt-4  parallax-logo">
                        <img className="parallax-img" src={ibm} alt = 'alibaba' />
                    </div>
                    <div className="parallax-button">
                        <div className="parallax-button-trending  mt-8">Trending <i className="fa fa-fire" aria-hidden="true"></i></div>
                    </div>
                    <div className="mt-4  parallax-header">
                        <h4>IBM</h4>
                    </div>
                    <div className=" mt-4 parallax-description">
                        <p>Secure the future of your career and demonstrate your expertise by obtaining IBM certifications and specialty credentials. The enhanced experience consolidates exam and certification details on a single page</p>
                    </div>
                    <div className="start-learning-button  pt-2">
                        <Link to={'/search?category=IBM'} className = 'nav-link text-dark start-learning-link'>
                            <p className="text-decoration-underline">Start Learning<span><i className="fa fa-trending" aria-hidden="true"></i></span></p> 
                        </Link>                      
                    </div>
                </div>
            </div>
            </div>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className='' id = 'parallax-main'>
          <Col>
            <div id='parallax-item'>
              <div className=" carousel__slide-item-img-link">
                <div className="" id="parallax-inner">
                    <div className="mt-4  parallax-logo">
                        <img className="parallax-img" src={oracle} alt = 'alibaba' />
                    </div>
                    <div className="parallax-button">
                        <div className="parallax-button-trending  mt-8">Trending <i className="fa fa-fire" aria-hidden="true"></i></div>
                    </div>
                    <div className="mt-4  parallax-header">
                        <h4>ORACLE</h4>
                    </div>
                    <div className=" mt-4 parallax-description">
                        <p>Oracle certification allows students to showcase their advanced technical skills, earning a distinguished recognition widely acknowledged in the information technology industry</p>
                    </div>
                    <div className="start-learning-button  pt-2">
                        <Link to={'/search?category=Oracle'} className = 'nav-link text-dark start-learning-link'>
                            <p className="text-decoration-underline">Start Learning<span><i className="fa fa-trending" aria-hidden="true"></i></span></p> 
                        </Link>                      
                    </div>
                </div>
            </div>
            </div>
          </Col>
          <Col>
            <div id='parallax-item'>
              <div className=" carousel__slide-item-img-link">
                <div className="" id="parallax-inner">
                    <div className="mt-4  parallax-logo">
                        <img className="parallax-img" src={pmp} alt = 'alibaba' />
                    </div>
                    <div className="parallax-button">
                        <div className="parallax-button-trending  mt-8">Trending <i className="fa fa-fire" aria-hidden="true"></i></div>
                    </div>
                    <div className="mt-4  parallax-header">
                        <h4>Project Management Professional (PMP)®</h4>
                    </div>
                    <div className=" mt-4 parallax-description">
                        <p>Obtaining a CAPM provides you with the knowledge and abilities necessary to embark on a career in project management. Learn Now!</p>
                    </div>
                    <div className="start-learning-button  pt-2">
                        <Link to={'/product/64ccd1f836d627b872e6f179'} className = 'nav-link text-dark start-learning-link'>
                            <p className="text-decoration-underline">Start Learning<span><i className="fa fa-trending" aria-hidden="true"></i></span></p> 
                        </Link>                        
                    </div>
                </div>
            </div>
            </div>
          </Col>
          <Col>
            <div id='parallax-item'>
              <div className=" carousel__slide-item-img-link">
                <div className="" id="parallax-inner">
                    <div className="mt-4  parallax-logo">
                        <img className="parallax-img" src={safe} alt = 'alibaba' />
                    </div>
                    <div className="parallax-button">
                        <div className="parallax-button-trending  mt-8">Trending <i className="fa fa-fire" aria-hidden="true"></i></div>
                    </div>
                    <div className="mt-4  parallax-header">
                        <h4> Scaled Agile Framework® (SAFe®) </h4>
                    </div>
                    <div className=" mt-4 parallax-description">
                        <p>SAFe certification confirms that a software engineer or any IT professional has undergone training and demonstrated their expertise in the Scaled Agile Framework.</p>
                    </div>
                    <div className="start-learning-button  pt-2">
                        <Link to={'/search?category=SAFe'} className = 'nav-link text-dark start-learning-link'>
                            <p className="text-decoration-underline">Start Learning<span><i className="fa fa-trending" aria-hidden="true"></i></span></p> 
                        </Link>                         
                    </div>
                </div>
            </div>
            </div>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default ParallaxSlider;