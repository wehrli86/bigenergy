import React from "react"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container flex'>
          <div className='left '>
            <div className='img'>
              <img src='./assets/home.gif
            ' alt='' />
            </div>
          </div>
          <div className='right topMarign'>
            <h1>
              DER <br />
              ENERGYDRINK
            </h1>
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
            <p>Bester Energy Drink!</p>
            <a href="/pages">
            <button className='primary-btn'>BUY NOW!</button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
