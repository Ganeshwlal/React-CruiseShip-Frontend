import React, {useRef, useEffect, useContext} from 'react'
// import {Container, Row, Button} from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Container, Row  } from 'reactstrap';
import logo from '../../assets/images/logo.jpg'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBeer,Fa500Px } from 'react-icons/fa';
import './Header.css'
import { FiMenu } from "react-icons/fi";
// import { useRef } from 'react';
import {AuthContext} from '../../context/AuthContext'





const nav_links = [
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

function Header() {


    const headerRef = useRef(null)

    const navigate = useNavigate()
    const {user, dispatch} = useContext(AuthContext)

    const logout = ()=>{
        dispatch({type:'LOGOUT'})
        navigate('/')
    }



    const stickyHeaderFunc = ()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
                headerRef.current.classList.add('sticky_header')
            }
            else{
                headerRef.current.classList.remove('sticky_header')
 
            }
        })
    }

    useEffect(()=>{
        stickyHeaderFunc()
        return window.removeEventListener('scroll', stickyHeaderFunc)
    })

    return (
        <div>

            <header className='header' ref={headerRef}>
                <Container>
                    <Row>
                        <div className='nav_wrapper d-flex align-items-center 
                    justify-content-between'>

                            {/* logo */}
                            <div className="logo">
                                <img src="https://i.postimg.cc/J0qByZNm/logo.jpg" alt="" />
                            </div>

                            <div className="navigation">
                                <ul className="menu d-flex align-items-center gap-5">
                                    {
                                        nav_links.map((item, index) => (
                                            <li className="nav_item" key={index}>
                                                <NavLink to={item.path} className={navClass=>navClass.isActive?"active_link":""}>{item.display}</NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className='nav_right d-flex align-items-center gap-4'>
                                <div className='nav_btns d-flex align-items-center gap-4'>

                                    {
                                        user? <>
                                        <h5 className='mb-0'>{user.username}</h5>
                                        <Button variant="primary" className='btn btn-dark' onClick={logout}>Logout</Button>
                                        </> : <>
                                        <Button variant="primary" className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
                                    <Button className='btn' variant="success"><Link to='/register'>Register</Link></Button>

                             
                                        </>
                                    }

                                           


                                </div>

                                <span className='mobile_menu'>
                                <FiMenu/>
                                
                                
                                </span>

                            </div>

                        </div>
                    </Row>
                </Container>
            </header>

        </div>
    )
}

export default Header









// function header() {
//   return (
//     <div>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               alt=""
//               src="https://i.postimg.cc/J0qByZNm/logo.jpg"
//               width="100"
//               height="100"
//               className="d-inline-block align-top ms-5"
//             />{' '}
//             <span>
//               <h3> Royal Caribbean</h3>
//             </span>

//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//     </div>
//   )
// }

// export default header