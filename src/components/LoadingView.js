import React from 'react'

export default function () {
  return (
      <div className='container'>
              <div className="card " aria-hidden="true">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_vJigBLxiYQZ4Gnd5LNYZ5QSjeVizCbcMg&s" className="card-img-top" alt="placeholders" />
    <div className="card-body">
      <h5 className="card-title placeholder-glow">
        <span className="placeholder col-6"></span>
      </h5>
      <p className="card-text placeholder-glow">
        <span className="placeholder col-7"></span>
        <span className="placeholder col-4"> </span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder col-8"></span>
      </p>
      <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
    </div>
  </div>
      </div>
  )
}
