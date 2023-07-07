import Carousel from 'react-bootstrap/Carousel';
import bgOne from '../assets/wallpaper.jpg';
import bgTwo from '../assets/wallpaper2.jpg';
import bgThree from '../assets/wallpaper1.jpg';
import logo from '../assets/MainLogo.png';

import Button from 'react-bootstrap/Button';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={bgOne}
          alt="First slide"
          style={{height: "800px"}}
        />
        <Carousel.Caption id = "carousel-caption">
          <h1 className='display-2 text-bold'>SUPREME TRAINING LLC</h1>
          <h5 className='display-5'>Highly skilled trainers</h5>
          <p>10% OFF YOUR FIRST ORDER</p>
          <Button style={{height: '70px', width: '270px'}} variant='primary'>
            <h5>GET CERTIFIED NOW</h5></Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={bgTwo}
          alt="Second slide"
          style={{height: "800px"}}
        />
        <Carousel.Caption id = "carousel-caption">
          <h1 className='display-2 text-bold'>SUPREME TRAINING LLC</h1>
          <h5 className='display-5'>Train at your own preferred time</h5>
          <p>10% OFF YOUR FIRST ORDER</p>
          <Button style={{height: '70px', width: '270px'}} variant='primary'>
            <h5>GET CERTIFIED NOW</h5></Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bgThree}
          alt="Third slide"
          style={{height: "800px"}}
        />
        <Carousel.Caption id = "carousel-caption">
          <h1 className='display-2 text-bold'>SUPREME TRAINING LLC</h1>
          <h5 className='display-5'>Get certified from the comfort of your home</h5>
          <p>10% OFF YOUR FIRST ORDER</p>
          <Button style={{height: '70px', width: '270px'}} variant='primary'>
            <h5>GET CERTIFIED NOW</h5></Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;