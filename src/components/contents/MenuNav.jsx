import React, { useEffect, useState } from 'react'

function MenuNav() {

    const [menuDatas, setMenuDatas] = useState();

    useEffect(()=> {
        setMenuDatas();
    }, [])


    return (

        <div>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar">
                <div className="offcanvas-header">
                    <div className="offcanvas-logo">
                        <img src="assets/images/logo.webp" className="logo-img" alt=""/>
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body primary-menu">
                    <ul className="navbar-nav justify-content-start flex-grow-1 gap-1">
                        {
                            menuDatas && menuDatas.map(item => (
                                <span> {item.id} </span>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MenuNav