import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import wonder from '../assets/images/ava4.jpg'


function Newsletter() {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='newsletter_content'>
                        <h2>Subscribe now to get useful travelling information</h2>
                         <div className='newsletter_input'>
                            <input  type="email" placeholder='Enter your email' />
                            <button 
                             className='btn newsletter_btn'
                             >Subscribe</button>
                         </div>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facilis debitis quae dicta quos odio, harum incidunt perferendis libero temporibus nobis officiis veniam architecto, vero dolore ducimus itaque similique rerum.</p>

                    </div>
                </Col>
                <Col lg='6'>
                <div className='newsletter_img'>
                    <img src={wonder} alt="" />
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter