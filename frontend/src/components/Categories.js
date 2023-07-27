import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";
import aws from '../assets/aws.png';
import cisco from '../assets/cisco.png'
import azure from '../assets/azure.png';
import google_cloud from '../assets/google-cloud.png';
import comptia from '../assets/comptia.png';
import ibm from '../assets/ibm.jpg';
import vmware from '../assets/vmware.png';
import oracle from '../assets/oracle.png';
import salesforce from '../assets/salesforce.jpg';
import alibaba from '../assets/alibaba.png';
import redhat from '../assets/redhat.png';
import citrix from '../assets/citrix.jpg';
import security from '../assets/security.jpg';
import devops from '../assets/devops.jpg';
import pmp from '../assets/pmp.jpg';
import isc from '../assets/isc.jpg';
import isaca from '../assets/isaca.jpg';
import music from '../assets/music.jpg';
import oral_care from '../assets/oral_care.jpg';
import others from '../assets/others.jpeg';
import pets from '../assets/pets.jpg';
import skincare from '../assets/skincare.jpg';
import sporting from '../assets/sporting.jpeg';
import vehicles from '../assets/vehicles.jpg';
import watches from '../assets/watches.jpg';
import women_fashion from '../assets/women_fashion.jpg';
import women_shoes from '../assets/women_shoes.jpg';
const Categories = () => {
    return(
        <div className='mt-4' id = "category-main">
        <h1 id = "category-header" className='text-center'><span className='theme-color'>POPULAR </span>COURSES</h1>
        <Carousel variant='dark' id = "carousel">
            <Carousel.Item className='category-car-inner' interval={1000}>
            <div className='row'>
                <div className="col-3" id = "phones-and-tab">
                    <Link to={'/search?category=aws'} className = 'nav-link text-dark'>
                        <div  id = "category-item">
                            <div className="bg-light aws" id = "category-inner">
                                <img
                                    src={aws}
                                    alt= "aws"/>
                            </div>
                            <p className='mt-2 text-center'>AWS</p>
                        </div>
                    </Link>
                </div>
                <div className="col-3 d-inline">
                    <Link className = 'nav-link text-dark' to={'/search?category=cisco'}>
                        <div  id = "category-item">
                            <div className="bg-light cisco" id = "category-inner">
                                <img
                                    src={cisco}
                                     
                                    alt= "cisco"/>
                            </div>
                            <p className='mt-2 text-center'>CISCO</p>
                        </div>
                    </Link>
                </div>
                <div className="col-3">
                    <Link className = 'nav-link text-dark' to={'/search?category=azure'}>
                        <div  id = "category-item">
                            <div className="  bg-light azure" id = "category-inner">
                                <img
                                    src={azure}
                                     
                                    alt= "azure"/>
                            </div>
                            <p className='mt-2 text-center'>AZURE</p>
                        </div>
                    </Link>
                </div>
                <div className="col-3">
                    <Link className = 'nav-link text-dark' to={'/search?category=google%20cloud'}>
                        <div  id = "category-item">
                            <div className="bg-light google-cloud" id = "category-inner">
                                <img
                                    src={google_cloud}
                                     
                                    alt= "google cloud"/>
                            </div>
                            <p className='mt-2 text-center'>GOOGLE CLOUD</p>
                        </div>
                    </Link>
                </div>
            </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='row'>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=comptia'}>
                    <div  id = "category-item">
                        <div className="  bg-light comptia" id = "category-inner">
                            <img
                                src={comptia}
                                 
                                alt= "comptia"/>
                        </div>
                        <p className='mt-2 text-center'>COMPTIA</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=ibm'}>
                    <div  id = "category-item">
                        <div className="  bg-light ibm" id = "category-inner">
                            <img
                                src={ibm}
                                 
                                alt= "ibm"/>
                        </div>
                        <p className='mt-2 text-center'>IBM</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=vmware'}>
                    <div  id = "category-item">
                        <div className="  bg-light vmware" id = "category-inner">
                            <img
                                src={vmware}
                                 
                                alt= "vmware"/>
                        </div>
                        <p className='mt-2 text-center'>VMWARE</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=alibaba'}>
                    <div  id = "category-item">
                        <div className="  bg-light alibaba" id = "category-inner">
                            <img
                                src={alibaba}
                                 
                                alt= "alibaba"/>
                        </div>
                        <p className='mt-2 text-center'>ALIBABA CLOUD</p>
                    </div>
                </Link>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='row'>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=oracle'}>
                    <div  id = "category-item">
                        <div className="  bg-light oracle" id = "category-inner">
                            <img
                                src={oracle}
                                 
                                alt= "oracle"/>
                        </div>
                        <p className='mt-2 text-center'>ORACLE CLOUD</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=pmp'}>
                    <div  id = "category-item">
                        <div className="  bg-light pmp" id = "category-inner">
                            <img
                                src={pmp}
                                 
                                alt= "pmp"/>
                        </div>
                        <p className='mt-2 text-center'>PMP</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=redhat'}>
                    <div  id = "category-item">
                        <div className="  bg-light redhat" id = "category-inner">
                            <img
                                src={redhat}
                                 
                                alt= "furniture"/>
                        </div>
                        <p className='mt-2 text-center'>REDHAT</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=computer%20security'}>
                    <div  id = "category-item">
                        <div className="  bg-light security" id = "category-inner">
                            <img
                                src={security}
                                 
                                alt= "security"/>
                        </div>
                        <p className='mt-2 text-center'>COMPUTER SECURITY</p>
                    </div>
                </Link>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <div className='row'>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=citrix'}>
                    <div  id = "category-item">
                        <div className="  bg-light citrix" id = "category-inner">
                            <img
                                src={citrix}
                                 
                                alt= "citrix"/>
                        </div>
                        <p className='mt-2 text-center'>CITRIX</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=devops'}>
                    <div  id = "category-item">
                        <div className="  bg-light devops" id = "category-inner">
                            <img
                                src={devops}
                                 
                                alt= "devops"/>
                        </div>
                        <p className='mt-2 text-center'>DEVOPS</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=isc'}>
                    <div  id = "category-item">
                        <div className="  bg-light isc" id = "category-inner">
                            <img
                                src={isc}
                                 
                                alt= "isc"/>
                        </div>
                        <p className='mt-2 text-center'>(ISC)²</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=salesforce'}>
                    <div  id = "category-item">
                        <div className="  bg-light salesforce" id = "category-inner">
                            <img
                                src={salesforce}
                                 
                                alt= "salesforce"/>
                        </div>
                        <p className='mt-2 text-center'>SALESFORCE</p>
                    </div>
                </Link>
            </div>
        </div>
      </Carousel.Item>
      {/* <Carousel.Item interval={1000}>
        <div className='row'>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=Music'}>
                    <div  id = "category-item">
                        <div className="  bg-light music" id = "category-inner">
                            <img
                                src={music}
                                 
                                alt= "music"/>
                        </div>
                        <p className='mt-2 text-center'>MUSIC</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=Oral%20Care'}>
                    <div  id = "category-item">
                        <div className="  bg-light oral_care" id = "category-inner">
                            <img
                                src={oral_care}
                                 
                                alt= "oral_care"/>
                        </div>
                        <p className='mt-2 text-center'>ORAL CARE</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=Pets'}>
                    <div  id = "category-item">
                        <div className="  bg-light pets" id = "category-inner">
                            <img
                                src={pets}
                                 
                                alt= "pets"/>
                        </div>
                        <p className='mt-2 text-center'>PETS</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=sporting%20accessories'}>
                    <div  id = "category-item">
                        <div className="  bg-light sporting" id = "category-inner">
                            <img
                                src={sporting}
                                 
                                alt= "sporting"/>
                        </div>
                        <p className='mt-2 text-center'>SPORTING</p>
                    </div>
                </Link>
            </div>
        </div>
      </Carousel.Item> */}
      <Carousel.Item interval={1000}>
        <div className='row'>
            {/* <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=skin%20care'}>
                    <div  id = "category-item">
                        <div className="  bg-light skin_care" id = "category-inner">
                            <img
                                src={skincare}
                                 
                                alt= "skin_care"/>
                        </div>
                        <p className='mt-2 text-center'>SKIN CARE</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=vehicles'}>
                    <div  id = "category-item">
                        <div className="  bg-light vehicles" id = "category-inner">
                            <img
                                src={vehicles}
                                 
                                alt= "vehicles"/>
                        </div>
                        <p className='mt-2 text-center'>VEHICLES</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=Watches'}>
                    <div  id = "category-item">
                        <div className="  bg-light watches" id = "category-inner">
                            <img
                                src={watches}
                                 
                                alt= "watches"/>
                        </div>
                        <p className='mt-2 text-center'>WATCHES</p>
                    </div>
                </Link>
            </div> */}
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=isaca'}>
                    <div  id = "category-item">
                        <div className="  bg-light men_shoes" id = "category-inner">
                            <img
                                src={isaca}
                                 
                                alt= "isaca"/>
                        </div>
                        <p className='mt-2 text-center'>ISACA</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=others'}>
                    <div  id = "category-item">
                        <div className="  bg-light others" id = "category-inner">
                            <img
                                src={others}
                                 
                                alt= "others"/>
                        </div>
                        <p className='mt-2 text-center'>OTHERS</p>
                    </div>
                </Link>
            </div>
        </div>
      </Carousel.Item>
      {/* <Carousel.Item interval={1000}>
        <div className='row'>
                                <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=Women%20Fashion'}>
                    <div  id = "category-item">
                        <div className="  bg-light women_fashion" id = "category-inner">
                            <img
                                src={women_fashion}
                                 
                                alt= "women_fashion"/>
                        </div>
                        <p className='mt-2 text-center'>WOMEN FASHION</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=Women%20Shoes'}>
                    <div  id = "category-item">
                        <div className="  bg-light women_shoes" id = "category-inner">
                            <img
                                src={women_shoes}
                                 
                                alt= "women_shoes"/>
                        </div>
                        <p className='mt-2 text-center'>WOMEN SHOES</p>
                    </div>
                </Link>
            </div>
            <div className="col-3">
                <Link className = 'nav-link text-dark' to={'/search?category=others'}>
                    <div  id = "category-item">
                        <div className="  bg-light others" id = "category-inner">
                            <img
                                src={others}
                                 
                                alt= "others"/>
                        </div>
                        <p className='mt-2 text-center'>OTHERS</p>
                    </div>
                </Link>
            </div>
        </div>
      </Carousel.Item> */}
    </Carousel>
    </div>
    )
}

export default Categories;