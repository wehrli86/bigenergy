import React from "react"
import Blogdata from "./Blogdata"
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"

const Blog = () => {
  return (
    <>
      <section className='blog Services'>
        <div className='container topMarign'>
          <div className='heading'>
            <h3>LETZTE STORIES</h3>
            <h1>LESE ERFOLGSGESCHICHTEN VON UNSEREN KUNDEN</h1>
          </div>

          <div className='contain grid topMarign'>
            {Blogdata.map((val, index) => {
              return (
                <div className='box' key={index}>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <span>{val.date}</span>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                    <a href='/'>
                      Read More
                      <KeyboardDoubleArrowRightIcon className='icon' />
                    </a>
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

export default Blog
