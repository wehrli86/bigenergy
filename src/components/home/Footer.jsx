import React from "react"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid1'>
          <div className='box'>
            <img src='./assets/logo1.png' alt='' />
            <p>Gönn DIR nur das Beste!
              FOLLOWS US ON SOCIALS:
            </p>
            <div className='SocailIcon'>
            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-facebook-f facebook'></i>
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-instagram instagram'></i>
            </a>
            <a href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-twitter twitter'></i>
              </a>  
            </div>
          </div>

          <div className='box'>
            <h2>Shorties</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>FAQ's</li>
            </ul>
          </div>

          <div className='box'>
            <h2>NEWS</h2>
            <div className='text'>
              <p>BIG ENERGY erhält Kulinarpreis</p>
              <span> 28 Feb 2023</span>
            </div>
            <div className='text'>
              <p>Best Product of Switzerland</p>
              <span> 12 Dec 2022</span>
            </div>
            <div className='text'>
              <p>VEGAN und mehr</p>
              <span> 01 Aug 2022</span>
            </div>
          </div>

          <div className='box'>
            <h2>Get in Touch</h2>
            <p>Kontakt für Reseller und Gross- sowie Detailhändleranfragen:</p>
            <div className='icon'>
               <i className='fa-solid fa-location-dot'></i>
              <label>Hauptstrasse 30, 3000 Bern SWITZERLAND</label>
            </div>
            <div className='icon'>
              <i className='fa fa-phone'></i>
              <label>Phone: +41 79 400 30 20</label>
            </div>
            <div className='icon'>
              <i className='fa fa-envelope'></i>
              <label>Email: support@bigenergy.ch</label>
            </div>
          </div>
        </div>
        <div className='legal container'>
          <p>Copyright @2023. All rights reserved.</p>
          <label>
            Design & Developed by <span>WIHF Sem 3, Gruppe 2</span>
          </label>
        </div>
      </footer>
    </>
  )
}

export default Footer
