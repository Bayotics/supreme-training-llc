import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Slider() {
  return (
   <div className='' id='main-hero'>
      <div className=' row w-100 h-100'>
        <div className=' col-7 hero-left'>
        </div>
        <div className='col-5 hero-right'>
          <div className=' main-bg-captions'>
            <h1 className='text-white text-left'>Maximise your tech Potential</h1>
            <h5 className='text-white mt-8'> Begin and progress your professional IT journey by accessing over 3000 courses and Professional 
              Certificates offered by renowned professionals and top-tier companies.</h5>
              <div className='main-bg-btn'>
                <Link 
                      to = "/search?category=all&query=all&price=all&rating=all&order=newest&page=1" 
                      className='nav-link text-white bold-text main-bg-btn-link'>
                      <button className="col btn btn-funky-moon btn-rounded"><p>Explore ➙</p></button>
                </Link>
              </div>
          </div>
        </div>
      </div>
   </div>
  );
}

export default Slider;