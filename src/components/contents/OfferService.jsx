import React from 'react'
import SectionTItle from './common/SectionTItle'

function OfferService() {

    const offerservice =[
        {
            id:1,
            classname : "border-primary",
            subclassname : "text-primary",
            subsubclassname : "bi-truck",
            servicename : "Free Delivery",
            serviceinfo : "Nor again is there anyone who loves or pursues or desires to obtain pain of itself."
        },
        {
            id:2,
            classname : "border-danger",
            subclassname : "text-danger",
            subsubclassname : "bi-credit-card",
            servicename : "Free Delivery",
            serviceinfo : "Nor again is there anyone who loves or pursues or desires to obtain pain of itself."
        },{
            id:2,
            classname : "border-success",
            subclassname : "text-success",
            subsubclassname : "bi-minecart-loaded",
            servicename : "Free Returns",
            serviceinfo : "Nor again is there anyone who loves or pursues or desires to obtain pain of itself."
        }
    ]

    const offerservicesection = {
        title: "Featured Products",
        info : "The purpose of lorem ipsum"
      }
    
  return (
    <div>
        <section className="product-thumb-slider section-padding">
            <div className="container">
                <SectionTItle section = {offerservicesection}/>
                <div className="row row-cols-1 row-cols-lg-4 g-4">
                    {
                        offerservice.map(service =>(
                            <div className="col d-flex">
                                {/* 클래스 네임 추가하기 {}를 ""안에 쓰기/ 밖에 쓰기/백틱 쓰기 */}
                                <div className="card depth border-0 rounded-0 border-bottom border-3 w-100 {service.classname}" >
                                    <div className="card-body text-center">
                                        <div className="h1 fw-bold my-2 {service.subclassname}">
                                        {/* <div className="h1 fw-bold my-2 " {service.subclassname}> */}
                                            <i className = "bi {service.subsubclassname}"></i>
                                            {/* <i className = `bi ${service.subsubclassname}`></i> */}
                                        </div>
                                        <h5 className="fw-bold">{service.servicename}</h5>
                                        <p className="mb-0">{service.serviceinfo}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </div>
  )
}

export default OfferService