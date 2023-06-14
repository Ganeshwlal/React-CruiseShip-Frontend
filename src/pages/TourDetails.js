import React, { useEffect, useRef, useState } from 'react'
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup, Button } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import { FaStar, FaMapMarkerAlt, FaMapPin, FaRupeeSign } from "react-icons/fa";
import calculateAvgRating from '../utils/avgRating'
import { HiUserGroup, HiStar } from "react-icons/hi";
import { GiPathDistance } from "react-icons/gi";
import avatar from '../assets/images/ava4.jpg'
import wonder1 from '../assets/images/ava3.jpeg'
import wonder2 from '../assets/images/ava5.jpeg'
import Booking from '../components/Booking/Booking'
import Newsletter from './../shared/Newsletter'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'



function TourDetails() {

  const { id } = useParams()

  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)

const  {data:tour, loading, error}=useFetch(`${BASE_URL}/TOURS/${id}`)




  // const tour = tourData.find(tour => tour.id === id)

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews)

  const style = { color: "#73a0de", fontSize: "1.5em" }
  const review_icon ={fontSize:"1.2rem", color: "#73a0de" }

  const options = {day:'numeric', month:'long', year:'numeric'}

  //submit req to the server
  const submitHandler = e=>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;

    // alert(`${reviewText}, ${tourRating}`)
  }
useEffect(()=>{
  window.scrollTo(0,0)
},[tour])

  return (
    <>
      <section>
        <Container>
          {
            loading && <h4 className='text-center pt-5'>Loading...</h4>
          }
          {
            error && <h4 className='text-center pt-5'>{error}</h4>
          }
         {
          !loading && !error && ( <Row>
          <Col lg='8'>
            <div className='tour_content'>
              <img src={photo} alt="" />
              

              <div className="tour_info">
                <h2>{title}</h2>
                <div className='d-flex align-items-center gap-5'>


                  <span className='tour_rating d-flex align-items-center gap-1'>
                    <FaStar style={style} /> {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? 'Not rated' : <span>({reviews?.length})</span>}
                  </span>

                  <span>
                    <FaMapMarkerAlt style={style} /> {address}
                  </span>
                </div>

                <div className="tour_extra-details">
                  <span>
                    <FaMapPin style={style} /> {city}
                  </span>
                  <span>
                    <FaRupeeSign style={style} /> {price} / per person
                  </span>
                  <span>
                    <GiPathDistance style={style} /> {distance} k/m
                  </span>
                  <span>
                    <HiUserGroup style={style} /> {maxGroupSize} people
                  </span>
                </div>

                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              <div className="tour_reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>
                <Form onSubmit={submitHandler}>
                  <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                    <span onClick={()=>setTourRating(1)}>
                      1 <HiStar />
                    </span>

                    <span onClick={()=>setTourRating(2)}>
                      2 <HiStar />
                    </span>

                    <span onClick={()=>setTourRating(3)}>
                      3 <HiStar />
                    </span>

                    <span onClick={()=>setTourRating(4)}>
                      4 <HiStar />
                    </span>

                    <span onClick={()=>setTourRating(5)}>
                      5 <HiStar />
                    </span>
                  </div>

                  <div className="review_input">
                    <input  type="text" ref={reviewMsgRef} placeholder='Share your thoughts' required/>

                    
                    <Button color="primary" className='btn primary_btn ' type='submit'>
                      Submit
                    </Button>

                  </div>

                </Form>

                <ListGroup className='user_reviews'>
                  {
                    reviews?.map(reviews=>(
                      <div className='review_item'>
                        <img src={avatar} alt="" />

                        <div className='w-100'>
                          <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>Ganesh W Lal</h5>
                              <p>{new Date('03-20-2023').toLocaleDateString('en-US',options)}</p>
                            </div>

                            <span className='d-flex align-items-center'>
                            <b>5</b> <HiStar style={review_icon}/>
                            </span>

                          </div>

                          <h6>Amazing Tour</h6>

                        </div>
                      </div>
                    ))
                  }
                </ListGroup>

              </div>

            </div>
          </Col>

          <Col lg='4'>
                  <Booking tour={tour} avgRating={avgRating}/>
          </Col>

        </Row>
          )
         }
        </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default TourDetails