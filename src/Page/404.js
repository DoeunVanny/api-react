import React from 'react'
import {  useNavigate } from 'react-router-dom'

export default function NotFound() {
    const  navigate = useNavigate()
  return (
    <main className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 fw-bold">The page you are visiting not found. </h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button  onClick={() => navigate("/")}  type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Back to Home Page</button>
      </div>
    </div>
  </main>
  )
}
