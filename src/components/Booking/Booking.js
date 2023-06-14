import React, { useState } from 'react'
import './booking.css'
import { Form,FormGroup,Button,ListGroup,ListGroupItem } from 'reactstrap'
// 
import { FaStar, FaMapMarkerAlt, FaMapPin, FaRupeeSign } from "react-icons/fa";
import { AiFillCloseCircle,AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
// import ListGroup from 'react-bootstrap/ListGroup';




function Booking({ tour, avgRating }) {

    const {price, reviews}= tour;
    const navigate = useNavigate()

    const [crendentials, setCredentials]=useState({
        userId:'01',
        userEmail:'ganesh@gmail.com',
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:''
    })

    const handleChange = e =>{
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    };

    const serviceFee = 50
    const totalAmount = Number(price) * Number(crendentials.guestSize) + Number(serviceFee)


    //send data to the server
    const handleClick = e =>{
        e.preventDefault();
        // console.log(crendentials);

        navigate("/thank-you")
    }
      

    let iconStyles = { color: "#c584e8" };



    return (
        <div className='booking'>
            <div className="booking_top d-flex align-items-center justify-content-between">
                <h3>₹{price} <span>/per person</span> </h3>

                <span className='tour_rating d-flex align-items-center'>
                      <FaStar style={iconStyles}/> {avgRating === 0 ? null : avgRating}({reviews?.length})
                      
                    </span>
            </div>
                {/* Booking Form */}
                <div className="booking_form">
                    <h5>Information</h5>
                    <Form className='booking_info-form' onSubmit={handleClick}>
                        <FormGroup>
                            <input type="text" placeholder='Your Name' id='fullName' required onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <input type="number" placeholder='Phone' id='phone' required onChange={handleChange} />
                        </FormGroup>
                        <FormGroup className='d-flex align-items-center gap-3'>
                            <input type="date" placeholder='' id='bookAt' required onChange={handleChange} />
                            <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange} />

                        </FormGroup>
                        
                    </Form>
                </div>

                {/* booking bottom */}

                <div className="booking_bottom">
                    <ListGroup className='booking_bottom-listgroup' >
                        <ListGroupItem  className='border-0 px-0 '>
                            <h5 className='d-flex align-items-center gap-1'>₹{price} <AiOutlineClose/>1 person</h5>
                            <span>₹{price}</span>
                        </ListGroupItem>

                        <ListGroupItem  className='border-0 px-0'>
                            <h5>Service charge</h5>
                            <span>₹ {serviceFee}</span>
                        </ListGroupItem>

                        <ListGroupItem className='border-0 px-0 total'>
                            <h5>Total</h5>
                            <span>₹ {totalAmount}</span>
                        </ListGroupItem>
                    </ListGroup>

                    <Button color="success" className='btn primary_btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
                </div>

        </div>
    )
}

export default Booking