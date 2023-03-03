import React from "react"
import Data from "./Data"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import IosShareIcon from "@mui/icons-material/IosShare"

const Work = () => {
  return (
    <>
      <section className='work'>
        <div className='heading'>
          <h3>OUR BENEFITS</h3>
          <h1>SOME OF OUR CLIENTS</h1>
        </div>

        <div className='content'>
          {Data.map((val, index) => {
            return (
              <div className='box' key={index}>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='overlay'>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                  <div className='icon'>
                    <FullscreenIcon className='iconWork' />
                    <IosShareIcon className='iconWork' />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Work
