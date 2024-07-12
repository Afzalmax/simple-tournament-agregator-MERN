import React from 'react'
import { Link } from 'react-router-dom';
import bg from './media/‫img.jpg';
import './Home.css';
const Home = () => {
  return (<>
  <header>
  <h1 style={{textAlign:'center'}}>TOURNAMENTS</h1>
  <h3 style={{textAlign:'center'}}>Your one stop to know about all the Tournaments around TamilNadu</h3>
  </header>
  
  <img src={bg} alt="img" width='100%' height='100%'/>
  <br></br>
  <Link to='/card'>
    <button id="openCardBtn">VIEW TOURNAMENT</button>
  </Link>
    <Link to='/form'>
    <button id="openFormBtn">ADD TOURNAMENT</button></Link>
    <br></br>
    <br></br>
    <footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo">Something</h1>
        
    <h2>Contact</h2>
    
    <address>
      Church Street,Royapettah,Chennai<br/>
          
      <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Media</h2>

      <ul className="nav__ul">
        <li>
          <a>Online</a>
        </li>

        <li>
          <a>Print</a>
        </li>
            
        <li>
          <a>Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">Sports</h2>
      
      <ul className="nav__ul nav__ul--extra">
        <li>
          <a>Cricket</a>
        </li>
        
        <li>
          <a>Football</a>
        </li>
        
        <li>
          <a>Tennis</a>
        </li>
        
        <li>
          <a>BasketBall</a>
        </li>
        
        <li>
          <a>Table Tennis</a>
        </li>
        
        <li>
          <a>Athletics</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Legal</h2>
      
      <ul className="nav__ul">
        <li>
          <a>Privacy Policy</a>
        </li>
        
        <li>
          <a>Terms of Use</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className="legal">
    <p>&copy; All rights reserved.</p>
    
    <div className="legal__links">
      <span>Made with <span className="heart">♥</span> remotely from Anywhere</span>
    </div>
  </div>
</footer>
    </>
    
  )
}

export default Home;
