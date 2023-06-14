import React from 'react'
import '../styles/home.css'
import { Container, Row, Col  } from 'reactstrap';
import wonder from '../assets/images/w2.jpg'
import wonder1 from '../assets/images/w3.jpg'
import wonder2 from '../assets/images/w4.jpg'
import wonder3 from '../assets/images/w5.jpg'
import wonder4 from '../assets/images/w6.jpg'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';




function Home() {




  return (
    <>
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='hero_content'>
            <div className="hero_subtitle d-flex align-items-center">
              <Subtitle subtitle={'Destination of Your Dreams'}/>
              {/* <img src={wonder2} alt="" /> */}
              <img className='imggg' src="https://www.carnival.com/-/media/images/ships/carnival-luminosa-open-for-sale-hero-mobile.jpg" alt="" />
            </div>
            <h1>Traveling opens the door to creating <span className='highlight'>memories</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in fugit, vitae mollitia esse sint minima, iusto facere sequi similique quos qui, possimus dicta molestiae cupiditate et culpa soluta delectus.</p>
          </div>
        </Col>

        <Col lg='2'>
          <div className='hero_img-box'>
            <img src={wonder3} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero_img-box mt-4'>
            <img src={wonder4} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero_img-box mt-5'>
            <img src='https://media2.giphy.com/media/uvxpNIlDUS5Ms/giphy.gif' alt="" />
          </div>
        </Col>

        <SearchBar/>

      </Row>

    </Container>
  </section>

  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className='services_subtitle'>What We Serve</h5>
          <h2 className='services_title'>We offer our best services</h2>
        </Col>

        <ServiceList/>

      </Row>
    </Container>
  </section>

  {/* tour section */}

  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <Subtitle subtitle={"Explore"}/>
          <h2 className='featured_tour-title'>Our Featured Tours</h2>

        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
  </section>

  {/* experiene secetion */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="experience_content">
            <Subtitle subtitle={'Experience'}/>
            <h2>With Our All Experience <br />We Will Serve You</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo soluta facilis dolor adipisci alias sunt! Esse veniam fugit sit eveniet voluptatum, est tempore odit cumque vero amet. Porro, praesentium at.</p>


          </div>

          <div className="counter_wrapper d-flex align-items-center gap-5">
            <div className="counter_box">
              <span>12K+</span>
              <h6>Successful Trip</h6>
            </div>

            <div className="counter_box">
              <span>5K+</span>
              <h6>Regular Clients</h6>
            </div>

            <div className="counter_box">
              <span>15</span>
              <h6>Years Experience</h6>
            </div>
          </div>
        </Col>
        <Col lg='6'>
          <div className="experience_img ">
            <img className='img_logo '  src="https://media.istockphoto.com/id/1131877134/photo/travel-illustration-worlds-famous-landmarks-and-tourist-destinations-elements-in-colorful.jpg?b=1&s=170667a&w=0&k=20&c=rLRSxOW2p3bMBuJm56rxNzJM3OeRBNtD1mZukJQuWHU=" alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>


  {/* gallery section */}
    <section className='gallery_section'>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Gallery'}/>
          
          <h2 className='gallery_title'>Visit Our Customers Tours Gallery</h2>
        </Col>
        <Col lg='12' className='p-4 img_logo'>
          <MasonryImagesGallery/>

        </Col>
      </Row>
    </section>

    {/* section */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitle subtitle={'Fans Love'}/>
            <h2 className='testimonial_tile'>What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonial/>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default Home