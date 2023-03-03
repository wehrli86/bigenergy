import React from "react"

const Branding = () => {
  const data = [
    {
      id: "01",
      heading: "NUMMER 1 AUF DEM MARKT",
      desc: "BESTER ENERGY-DRINK DER WELT!!",
    },
    {
      id: "02",
      heading: "LEISTUNG",
      desc: "LABOR BESTÄSTIGTE LEISTUNGSSTEIGERUNG!",
    },
    {
      id: "03",
      heading: "CREATIVE MIND",
      desc: "BEWUSSTSEINSERWITERNDE EIGENSCHAFT!",
    },
  ]
  return (
    <>
      <section id="branding" className='Branding'>
        <div className='container grid'>
          {data.map((value) => {
            return (
              <div key={value.id} className='box flex'>
                <div className='text'>
                  <h1>{value.id}</h1>
                </div>
                <div className='para'>
                  <h2>{value.heading}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Branding
