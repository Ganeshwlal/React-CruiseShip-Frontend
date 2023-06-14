import React, { useState, useContext } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import loginimg from '../assets/images/login.jpg'
import usericon from '../assets/images/user.png'
import { AuthContext } from './../context/AuthContext'
import { BASE_URL } from './../utils/config'



function Register() {

  const [credentials, setCredentials]=useState({
    userName:undefined,
    email:undefined,
    password:undefined
})

const {dispatch} = useContext(AuthContext)
const navigate = useNavigate()

  const handleChange = e =>{
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
};

  const handleClick = async e =>{
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method:"post",
        headers:{
          "content-type":"application/json",
        },
        body:JSON.stringify(credentials),
      });

      const result = await res.json()

      if(!res.ok) alert(result.message)

      dispatch({type:"REGISTER_SUCCESS"})
      navigate("/login")


    } catch (error) {
      alert(error.message)
    }
  }





  return (
    <section>
       <Container>
        <Row>
          <Col lg='10' className='m-auto'>
          <div className='login_container d-flex justify-content-between'>
            <div className="login_img">
              <img src={loginimg} alt="" />
            </div>

            <div className="login_form">
              <div className="user">
                <img src={usericon} alt="" />
              </div>
              <h2>Register</h2>

              <Form onSubmit={handleClick}>
              <FormGroup>
                  <input type="text" placeholder='Username' id='username' required onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                  <input type="email" placeholder='Email' id='email' required onChange={handleChange}/>
                </FormGroup>

                <FormGroup>
                  <input type="password" placeholder='Password' id='password' required onChange={handleChange}/>
                </FormGroup>

                <Button className='btn secondary_btn auth_btn' type='submit' color="primary">Create Account</Button>

              </Form>

              <p>Already have an account? <Link to={'/login'}>Login</Link></p>

            </div>

          </div>
          </Col>
        </Row>
       </Container>
    </section>
  )
}

export default Register