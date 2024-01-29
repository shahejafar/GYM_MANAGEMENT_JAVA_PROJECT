import React from 'react'
import Navbar from '../NavbarPages/Navbar'
import MainNav from './MainNav'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import banner from '../banner.png'
import Feature from './Feature'
import Offer from './Offer'

function MainPage() {
  return (
    <div  >
      <MainNav />
      <div id='main'>
        <div className='name'>
          <h2>STEP UP YOUR</h2>
          <h1><span>FITNESS</span> WITH US</h1>
          <p className='details'> Build Your Body And Fitness With Proffessional Touch</p>
          <div className='header-btns'>
            <a href='#' className='header-btn'> JOIN US</a>
          </div>
        </div>
      </div>
      <div>
      <Feature />
      <Offer />
      </div>
   
{/* <div className='main-page container'>
      <Carousel   >
      <Carousel.Item className='image '>
        <img
          className="d-block w-100  "
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=''>
        <img
          className="d-block w-100   image"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=''>
        <img 
          className="d-block w-100 image"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


   

</div> */}




</div>
  )
}

export default MainPage