import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

// import w

const servicesData =[
  {
    imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXl9N1ebCpfI61o7fQZ0Go9A4k3Cm7O9-WPg&usqp=CAU",
    title : 'Wonder of the Seas',
    desc : 'Wonder of the Seas is the flagship of Royal Caribbean International. She was completed in 2022 in the Chantiers de Atlantique shipyard in Saint-Nazaire, France'

  },
  {
    imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXl9N1ebCpfI61o7fQZ0Go9A4k3Cm7O9-WPg&usqp=CAU",
    title : 'Wonder of the Seas',
    desc : 'Wonder of the Seas is the flagship of Royal Caribbean International. She was completed in 2022 in the Chantiers de Atlantique shipyard in Saint-Nazaire, France'

  },
  {
    imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXl9N1ebCpfI61o7fQZ0Go9A4k3Cm7O9-WPg&usqp=CAU",
    title : 'Wonder of the Seas',
    desc : 'Wonder of the Seas is the flagship of Royal Caribbean International. She was completed in 2022 in the Chantiers de Atlantique shipyard in Saint-Nazaire, France'

  },
]

function ServiceList() {
  return (
    <>
    {
      servicesData.map((item,index)=>
      // <serviceCard/>
      <Col lg='3' key={index}> <ServiceCard item={item}/> </Col>
      )
    }

    </>
  )
}

export default ServiceList