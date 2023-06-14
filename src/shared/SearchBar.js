import React,{useRef} from 'react'
import './search-bar.css'
import {Col, Form, FormGroup} from "reactstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee,  } from '@fortawesome/fontawesome-free-solid'
import { FaUserFriends,FaSearchLocation,FaSearch } from 'react-icons/fa';
import {MdLocationOn,MdOutlineLocationSearching } from "react-icons/md";
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'


function SearchBar() {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)
    const navigate = useNavigate()

const searchHandler = async()=>{
    const location= locationRef.current.value
    const distance= distanceRef.current.value
    const maxGroupSize= maxGroupSizeRef.current.value

    if(location===''|| distance==='' || maxGroupSize===''){
        return alert('All fields are required!')
    }
    const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)

    if(!res.ok)
     alert('Something went wrong')

    const result = await res.json()
    

    navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,{state:result.data})
}


  return (
    
    <Col lg='12'>
        <div className='search_bar'>
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form_group form_group-fast form_group-fast'>
            <span><MdLocationOn /></span>
                <div>
                    <h6>Location</h6>
                    <input type="text" placeholder='where are you going?' ref={locationRef} />
                </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form_group form_group-fast form_group-fast'>
            <span><MdOutlineLocationSearching /></span>
                <div>
                    <h6>Distance</h6>
                    <input type="text" placeholder='Distance k/m' ref={distanceRef} />
                </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form_group form_group-fast form_group-last'>
                <span><FaUserFriends/></span>

                <div>
                    <h6>Max People</h6>
                    <input type="text" placeholder='0' ref={maxGroupSizeRef}/>
                </div>
            </FormGroup>

            <span className='search_icon' type='submit' onClick={searchHandler}><FaSearch/></span>
        </Form>
        </div>
    </Col>
  )
}

export default SearchBar