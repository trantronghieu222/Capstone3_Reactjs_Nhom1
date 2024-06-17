import React from 'react'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer__main container py-4">
          <div className="row">
            <div className="col footer__card">
              <h6>GET HELP</h6>
              <ul className='footer__list'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Nike</a></li>
                <li><a href="#">Adidas</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="col footer__card">
              <h6>SUPPORT</h6>
              <ul className='footer__list'>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Phone</a></li>
              </ul>
            </div>
            <div className="col footer__card">
              <h6>REGISTER</h6>
              <ul className='footer__list'>
                <li><a href="#">Register</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copyRight">
          <p>© 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải. </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer