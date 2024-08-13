import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <section id='footer'>
      <div className="footer-container">

      <div className="row1">
        <div className="col1">
          <h3 className='footer-title'><span class="underline">ENERGIZE FITNESS CLUB</span></h3>
          <ul className='footer-text'>
            <li>Coimbatore</li>
            <li>Kovaipudur</li>
            <li>Ayyappan kovil street</li>
          </ul>
        </div>

        <div className="col2">
          <h3 className='footer-title'><span class="underline">TRAINERS</span></h3>
          <ul className='footer-text'>
            <li><a href="/home">Dharshan</a></li>
            <li><a href="/contact">Thivin</a></li>
            <li><a href="/contact">Shri shabareesh</a></li>
            <li><a href="/contact">Sathyanarayanan</a></li>
          </ul>
        </div>
      </div>

      <div className="row3">
        <div className="col4">
          <h3 className='footer-title'><span class="underline">Contact</span></h3>
          <ul className='footer-text'>
            <li>+91 8300570566</li>
          </ul>
        </div>
      </div>

      </div>
    </section>
  )
}

export default Footer