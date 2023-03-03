import React from "react"


const Pages = () => {
  return (
    <>
      <section className='pagesContent'>
        <div className='container flex'>
          <div className='left'>
            <div className='img'>
              <img src='./assets/cans.jpg' alt='' />
            </div>
          </div>
          <div className=' 20%'>
            <h1>
              KAUFE <br />
              MICH
            </h1>
            <p>Gönne Dir den besten Energydrink!</p>
            <a href="https://paypal.ch" target="_blank" rel="noopener noreferrer">
              <div className='img'>
                <img src='./assets/paypal.jpg' alt='' />
              </div>
            </a>
          </div>
        </div>
      </section>
      
      <h2>BIG ENERGY! BIG ENERGY! BIG ENERGY! BIG ENERGY! BIG ENERGY! BIG ENERGY! BIG ENERGY! BIG ENERGY! BIG ENERGY! BIG ENERGY! BIG ENERGY! BIG ENERGY!</h2>
    </>
  )
}

export default Pages

