import React from 'react'

function Footer() {

    const footerbox = [
        {
            id:1,
            widget: "footer-widget-7",
            title : "Explore",
            subtitle : ["Fashion", "Women", "Furniture" ]
        },
        {
            id:2,
            widget: "footer-widget-8",
            title : "Company",
            subtitle : ["About Us", "Contact Us", "FAQ" ]
        }
    ]
  return (
    <div>
        <section className="footer-section bg-section-2 section-padding">
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-4 g-4">
                    <div className="col">
                        <div className="footer-widget-6">
                            <img src="assets/images/logo.webp" className="logo-img mb-3" alt=""/>
                            <h5 className="mb-3 fw-bold">About Us</h5>
                            <p className="mb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            {/* <a className="link-dark" href="javascript:;">Read More</a> */}
                        </div>
                    </div>
                    {
                        footerbox.map(box =>(
                            <div className="col">
                                <div className="footer-widget-7">
                                    <h5 className="mb-3 fw-bold">Explore</h5>
                                    <ul className="widget-link list-unstyled">
                                        <li>Fashion</li>
                                        <li>Women</li>
                                        <li>Furniture</li>
                                        {/* <li><a href="javascript:;">Fashion</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                    <div className="my-5"></div>
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center">
                                <h5 className="fw-bold mb-3">Download Mobile App</h5>
                            </div>
                            <div className="app-icon d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2">
                                <div>
                                    {/* <a href="javascript:;"> */}
                                    <img src="assets/images/play-store.webp" width="160" alt=""/>
                                    {/* </a> */}
                                </div>
                                <div>
                                    {/* <a href="javascript:;"> */}
                                        <img src="assets/images/apple-store.webp" width="160" alt=""/>
                                    {/* </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="footer-strip text-center py-3 bg-section-2 border-top positon-absolute bottom-0">
            <p className="mb-0 text-muted">© 2022. www.example.com | All rights reserved.</p>
        </footer>
        
    </div>
  )
}

export default Footer