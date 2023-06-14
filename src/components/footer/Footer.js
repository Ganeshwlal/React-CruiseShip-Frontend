
import React from 'react'
import './footer.css'
import { Container,Row,Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import { FaYoutube,FaGithub,FaFacebookSquare,FaInstagram,FaLinkedin,FaMapMarkerAlt,FaPhoneAlt,FaTwitter} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const quick_links = [
  {
      path: '/home',
      display: 'Home'
  },
  {
      path: '/about',
      display: 'About'
  },
  {
      path: '/tours',
      display: 'Tours'
  }

]

const quick_links2 = [
  {
      path: '/home',
      display: 'Home'
  },
  {
      path: '/login',
      display: 'Login'
  },
  {
      path: '/register',
      display: 'Register'
  }

]

const style = { color: "blue" }




function Footer() {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div>
              <img src={logo} alt="" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. perspiciati fuga.</p>

              <div className="social_links d-flex align-items-center gap-4">
              <span>
                  <Link to='#'><FaFacebookSquare style={{color:'#1877F2'}}/></Link>
                </span>
                <span>
                  <Link to='#'><FaYoutube style={{color:'#FF0000'}}/></Link>
                </span>
                <span>
                  <Link to='#'><FaLinkedin style={{color:'#0A66C2'}}/></Link>
                </span>
                <span>
                  <Link to='#'><FaInstagram style={{color:'#F40576'}}/></Link>
                </span>
                
                <span>
                  <Link to='#'><FaTwitter style={{color:'#1D9BF0'}}/></Link>
                </span>
                
                
                
                

              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer_link-title'>Discovery</h5>
            <ListGroup className='footer_quick-links'>
              {
                quick_links.map((item,index)=>(
                  <ListGroupItem key={index} className='list_group-item ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }

            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer_link-title'>Quick Links</h5>
            <ListGroup className='footer_quick-links'>
              {
                quick_links2.map((item,index)=>(
                  <ListGroupItem key={index} className='list_group-item ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }

            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer_link-title-contact'>Contact</h5>
            <ListGroup className='footer_quick-links-contact'>

            <ListGroupItem  className=' ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 style={style} className='mb-0 d-flex align-items-center gap-2'>
                      <span><FaMapMarkerAlt/></span>
                      Address:
                    </h6>
                    
                    <p style={style} className='mb-0'>Royal Caribbean International,</p>
                  </ListGroupItem>
             
                  <ListGroupItem  className=' ps-0 border-0 d-flex align-items-center gap-0'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span></span>
                            <p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>
                    </h6>
                    
                    <p style={style} className='mb-0'>Willingdon Island, Kochi, India</p>
                  </ListGroupItem>

                  <ListGroupItem  className=' ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 style={style} className='mb-0 d-flex align-items-center gap-2'>
                      <span><IoIosMail/></span>
                      Email:
                    </h6>
                    <p style={style} className='mb-0'>royalcaribbean@gmail.com</p>
                  </ListGroupItem>

                  <ListGroupItem  className=' ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 style={style} className='mb-0 d-flex align-items-center gap-2'>
                      <span><FaPhoneAlt/></span>
                     Phone:
                    </h6>
                    <p style={style} className='mb-0'>+91 1140777888</p>
                  </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
            <p className='copyright'>Copyright {year}, Designed and developed by W-Tech. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer