import Carousel from 'react-bootstrap/Carousel';
import bgOne from '../assets/wallpaper.jpg';
import bgTwo from '../assets/wallpaper2.jpg';
import bgThree from '../assets/wallpaper1.jpg';
import logo from '../assets/MainLogo.png';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          id='carousel-image'
          className="d-block w-100"
          src={bgOne}
          alt="First slide"
          // style={{height: "800px"}}
        />
        <Carousel.Caption id = "carousel-caption">
          <img id='carousel-logo' src={logo} alt='logo'></img>
          <h1 className='display-2 text-bold'>SUPREME INFORMATION TRAINING</h1>
          <h5 className='display-5'>Highly skilled trainers</h5>
          <p>10% OFF YOUR FIRST ORDER</p>
            <Link 
              to = "/search?category=all&query=all&price=all&rating=all&order=newest&page=1" >
              <Button  id = "carousel-button" variant='primary'>
              <h6 id = "carousel-btn-caption">GET CERTIFIED NOW</h6></Button>
            </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          id='carousel-image'
          className="d-block w-100"
          src={bgTwo}
          alt="Second slide"
          // style={{height: "800px"}}
        />
        <Carousel.Caption id = "carousel-caption">
          <img id='carousel-logo' src={logo} alt='logo'></img>
          <h1 className='display-2 text-bold'>SUPREME INFORMATION TRAINING</h1>
          <h5 className='display-5'>Train at your own time</h5>
          <p>10% OFF YOUR FIRST ORDER</p>
          <Link 
              to = "/search?category=all&query=all&price=all&rating=all&order=newest&page=1" >
              <Button  id = "carousel-button" variant='primary'>
              <h6 id = "carousel-btn-caption">GET CERTIFIED NOW</h6></Button>
            </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          id='carousel-image'
          className="d-block w-100"
          src={bgThree}
          alt="Third slide"
          // style={{height: "800px"}}
        />
        <Carousel.Caption id = "carousel-caption">
          <img id='carousel-logo' src={logo} alt='logo'></img>
          <h1 className='display-2 text-bold'>SUPREME INFORMATION TRAINING </h1>
          <h5 className='display-5'>Get certified from home</h5>
          <p>10% OFF YOUR FIRST ORDER</p>
          <Link 
              to = "/search?category=all&query=all&price=all&rating=all&order=newest&page=1" >
              <Button  id = "carousel-button" variant='primary'>
              <h6 id = "carousel-btn-caption">GET CERTIFIED NOW</h6></Button>
            </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;