import React from 'react'

function Item() {
  return (
    <div className="card">
        {/* <div className= { tag ? tag : ""}>New Season</div> */}
        {/* 조건에 따라 클래스명 다르게 하기, 프롭스로 태그 속성 받기 */}
        <div className="position-relative overflow-hidden">
            <div
                className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                {/* <a href="javascript:;"><i className="bi bi-heart"></i></a>
                <a href="javascript:;"><i className="bi bi-basket3"></i></a>
                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#QuickViewModal">
                    <i className="bi bi-zoom-in"></i>
                </a> */}
                {/* 자바스크립트는 뺴야하나? */}
            </div>
            <a href="product-details.html">
                <img src="assets/images/new-arrival/08.webp" className="card-img-top" alt="..."/>
            </a>
        </div>
        <div className="card-body">
            <div className="product-info text-center">
                <h6 className="mb-1 fw-bold product-name">Product Name</h6>
                <div className="ratings mb-1 h6">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                </div>
                <p className="mb-0 h6 fw-bold product-price">$49</p>
            </div>
        </div>
    </div>
  )
}

export default Item
