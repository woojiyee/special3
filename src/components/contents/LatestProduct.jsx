import React from 'react'
import Item from './common/Item'
import SectionTItle from './common/SectionTItle'


function LatestProduct() {

    const latestproductnav =[
        {
            id:1,
            tagid : "new-arrival",
            title : "New Arrival",
            target : "#new-arrival"
        },
        {
            id:2,
            tagid : "best-sellar",
            title : "Best Sellar",
            target : "#best-sellar"

        }
    ]

    const latestproductSectoin = {
        title: "Latest Products",
        info : "The purpose of lorem ipsum"
      } 

    // const latestproductnav = ["New Arrival", "Best Sellar", "Trending", "Special Offe"]
    // const navtarget = ["#new-arrival", "#best-sellar", "#trending-product", "#special-offer"]
    return (
        <div>
            <section className="product-tab-section section-padding bg-light">
                <div className="container">
                    <SectionTItle section = {latestproductSectoin}/>
                    <div className="row">
                        <div className="col-auto mx-auto">
                            <div className="product-tab-menu table-responsive">
                                <ul className="nav nav-pills flex-nowrap" id="pills-tab" role="tablist">
                                    {
                                        latestproductnav.map(navi =>(
                                            <li key = {navi.id} className="nav-item" role="presentation">
                                                <button className="nav-link {nav.id === 1? active : }" 
                                                        data-bs-toggle="pill" 
                                                        data-bs-target={navi.target} 
                                                        type="button">
                                                        {navi.title}           
                                                </button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="tab-content tabular-product">
                        {
                            latestproductnav.map(nav =>(
                                <div key = {nav.id}  className={nav.id === 1? "tab-pane fade show active" : "tab-pane fade"} id={nav.tagid}>
                                    {/* 클래스 네임 추가하는 것도 조건문?으로 추가 가능? */}
                                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-4">
                                        {/* 반복을 어케 돌리지? axios로 api 요청해서 상품 정보들 받아서 그 변수를 map 돌리면 되는걸까? ㅇㅇ */}
                                        {
                                            <div className="col">
                                                <Item/>
                                            </div>
                                        }
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

export default LatestProduct