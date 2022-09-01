import React from 'react'
import { Link } from 'react-router-dom'

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
                            <Link className="link-dark" to = "#">Read More</Link>
                        </div>
                    </div>
                    {
                        // 객체 아이디 값도 고유한데 unique key 쓰라는 에러가 계속 브라우저 콘솔창에 뜹니다.
                        footerbox.map((box) =>(
                            <div key = {box.id} className="col">
                                <div className={box.widget}>
                                    <h5 className="mb-3 fw-bold">{box.title}</h5>
                                    <ul className="widget-link list-unstyled">
                                        {
                                            box.subtitle.map(subtitle =>(
                                                <li>{subtitle}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                    <div className="col">
                        <div className="footer-widget-9">
                            <h5 className="mb-3 fw-bold">Follow Us</h5>
                            <div className="social-link d-flex align-items-center gap-2">
                            <Link to = "#"><i className="bi bi-facebook"></i></Link>
                            <Link to = "#"><i className="bi bi-twitter"></i></Link>
                            <Link to = "#"><i className="bi bi-linkedin"></i></Link>
                            <Link to = "#"><i className="bi bi-youtube"></i></Link>
                            <Link to = "#"><i className="bi bi-instagram"></i></Link>
                            </div>
                            <div className="mb-3 mt-3">
                            <h5 className="mb-0 fw-bold">Support</h5>
                            <p className="mb-0 text-muted">support@example.com</p>
                            </div>
                            <div className="">
                            <h5 className="mb-0 fw-bold">Toll Free</h5>
                            <p className="mb-0 text-muted">1800- 8xx 2xx</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-5"></div>
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center">
                                <h5 className="fw-bold mb-3">Download Mobile App</h5>
                            </div>
                            <div className="app-icon d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2">
                                <div>
                                    <Link to="#">
                                    <img src="assets/images/play-store.webp" width="160" alt=""/>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="#">
                                        <img src="assets/images/apple-store.webp" width="160" alt=""/>
                                    </Link>
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