import React from "react"
import ServicesData from "./ServicesData"

const Services = () => {
  return (
    <>
      <section className='Services topMarign'>
        <div className='container'>
          <div className='heading'>
            <h3>WAS BIGENERGY AUSMACHT</h3>
            <h1>DAS BESTE AUS BIGENERGY</h1>
          </div>

          <div className='contain grid topMarign'>
            {ServicesData.map((val, index) => {
              return (
                <div className='box' key={index}>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
