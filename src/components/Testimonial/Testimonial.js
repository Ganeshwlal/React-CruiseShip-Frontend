import React from 'react'
import Slider from 'react-slick'
import wonder from '../../assets/images/ava4.jpg'
import wonder1 from '../../assets/images/ava3.jpeg'
import wonder2 from '../../assets/images/ava5.jpeg'
import wonder4 from '../../assets/images/w5.jpg'
// import wonder4 from '../../assets/images/w6.jpg'
import wonder6 from '../../assets/images/g1.jpeg'
import wonder7 from '../../assets/images/g2.jpeg'
import wonder8 from '../../assets/images/g3.jpeg'
import wonder9 from '../../assets/images/g4.jpeg'
import wonder10 from '../../assets/images/g5.jpg'
import wonder11 from '../../assets/images/g6.jpeg'
import Carousel from 'react-bootstrap/Carousel';

function Testimonial() {
    // const settings={
    //     dots:true,
    //     infinite:true,
    //     autoplay:true,
    //     speed:1000,
    //     swipeToSlide:true,
    //     autoplaySpeed:2000,
    //     slidesToShow:3,

    //     responsive:[
    //         {
    //             breakpoint:992,
    //             settings:{
    //                 slidesToShow:2,
    //                 slidesToScroll:1,
    //                 infinite:true,
    //                 dots:true,
    //             },
    //         },
    //         {
    //             breakpoint:576,
    //             settings:{
    //                 slidesToShow:1,
    //                 slidesToScroll:1,
    //             },
    //         },
    //     ]
    // }



  return (
//    <Slider  {...settings}>
//     <div className="testimonial py-4 px-3">
//         <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eligendi veniam esse, quos tenetur praesentium possimus, magnam voluptas provident architecto repellendus in assumenda maxime ipsa, aut eum. Eaque, ab nostrum?</p>
//         <div className='d-flex align-items-center gap-4 mt-3'>
//             <img src={wonder} className='w-25 h-25 rounded-2 ava_img' alt="" />
//             <div>
//                 <h6 className='mb-0 mt-3'>Ganesh W Lal</h6>
//                 <p>Customer</p>
//             </div>
//         </div>
//     </div>

//     <div className="testimonial py-4 px-3">
//         <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eligendi veniam esse, quos tenetur praesentium possimus, magnam voluptas provident architecto repellendus in assumenda maxime ipsa, aut eum. Eaque, ab nostrum?</p>
//         <div className='d-flex align-items-center gap-4 mt-3'>
//             <img src={wonder1} className='w-25 h-25 rounded-2 ava_img' alt="" />
//             <div>
//                 <h6 className='mb-0 mt-3'>Gayathri R Lal</h6>
//                 <p>Customer</p>
//             </div>
//         </div>
//     </div>

//     <div className="testimonial py-4 px-3">
//         <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eligendi veniam esse, quos tenetur praesentium possimus, magnam voluptas provident architecto repellendus in assumenda maxime ipsa, aut eum. Eaque, ab nostrum?</p>
//         <div className='d-flex align-items-center gap-4 mt-3'>
//             <img src={wonder3} className='w-25 h-25 rounded-2 ava_img' alt="" />
//             <div>
//                 <h6 className='mb-0 mt-3'>Karthik</h6>
//                 <p>Customer</p>
//             </div>
//         </div>
//     </div>

    
//    </Slider>


<Carousel className='carousel' variant="dark">
      <Carousel.Item>
      <img src={wonder} className=' rounded-2 ava_img' alt="" />
        <Carousel.Caption>
          <h5>Ganesh W Lal</h5>
          {/* <p>Customer</p> */}
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <img src={wonder1} className=' rounded-2 ava_img' alt="" />
        <Carousel.Caption>
          <h5>Gayathri R Lal</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={wonder2} className='d-block rounded-2 ava_img' alt="" />
        <Carousel.Caption>
          <h5>Karthik</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Testimonial