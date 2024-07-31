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
            <li>block 10,Ayyappan kovil street</li>
          </ul>
        </div>

        <div className="col2">
          <h3 className='footer-title'><span class="underline">TRAINERS</span></h3>
          <ul className='footer-text'>
            <li><a href="/home">RISHI</a></li>
            <li><a href="/contact">NATUDURAI</a></li>
            <li><a href="/contact">STALIN</a></li>
            <li><a href="/contact">PRADHEESH</a></li>
          </ul>
        </div>
      </div>

      <div className="row3">
        <div className="col4">
          <h3 className='footer-title'><span class="underline">Contact</span></h3>
          <ul className='footer-text'>
            <li>+91 93423 45678</li>
          </ul>
        </div>
      </div>

      </div>
    </section>
  )
}

export default Footer