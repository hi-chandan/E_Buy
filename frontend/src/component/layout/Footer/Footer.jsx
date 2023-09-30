import React from 'react'
import "../Footer/Footer.css"
import playStore from "../../../../images/playStore.png"
import appStore from "../../../../images/AppStore.png"
const Footer = () => {
  return (


  <footer id='footer'>
    <div className='leftFooter'>
    <h4>DOWNLOAD OUR APP</h4>
    <p>Download App for Android and IOS</p>
    <img src={playStore} alt='PlayStore'/>
    <img src={appStore}alt='AppStore'/>
    </div>

    <div className="midFooter">
      <h1>ECOMMERCE</h1>
      <p>Hight Quality is our first priority</p>
      <p>Copyrights 2021  ChandanKumar</p>
    </div>
    <div className="rightFooter">
      <h4>Follow us</h4>
      <a href="http://">Instagram</a>
      <a href="http://">Youtube</a>
      <a href="http://">Facebook</a>
    </div>
  </footer>


  )
}

export default Footer