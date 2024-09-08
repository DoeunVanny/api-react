import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'

// shortcut   rfc
export default function Navbar() {
    const navigate = useNavigate()
    const {isLogin} = useSelector(state => state.authReducer)
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom container">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none"/>
        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={32} viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <NavLink  to="/" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder" : "nav-link px-2"}>Home</NavLink>
        <NavLink to="/data" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder" : "nav-link px-2"}>showDataALL</NavLink>
        <NavLink  to="/pricing" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder" : "nav-link px-2"}>Pricing</NavLink>
        <NavLink  to="/faq" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder" : "nav-link px-2"}>FAQs</NavLink>
        <NavLink to="/about-us" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder" : "nav-link px-2"}>About</NavLink>
       
      </ul>


      
      <div class="col-md-3 text-end">
       
        <button onClick={() => navigate('/create')} type="button" class="btn btn-outline-primary me-2">Insert</button>
        <button onClick={() => navigate('/login')}  type="button" className="btn btn-primary">
          {isLogin ? 'logout' : 'login'}</button>
      </div>
    </header>
  )
}
