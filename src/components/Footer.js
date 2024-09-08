import React from 'react'

export default function Footer() {
  return (
    <footer class="py-5 container">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/ " class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
 
      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024 Company, Inc. All rights reserved build by Doeun Vanny .</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
        </a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
       </a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
        </a></li>
      </ul>
    </div>
  </footer>
  )
}
