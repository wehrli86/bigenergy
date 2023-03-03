import React from "react"

const Wrapper = () => {
  const data = [
    {
      title: "BEREIT FÜR BIGENERGY?",
      heading: "DETAILHÄNDLER UND RESELLER WILLKOMMEN!",
      desc: "Haben Sie vor, unser Produkt in Ihr Sortiment aufzunehmen, kontaktieren Sie uns noch heute!",
    },
  ]
  return (
    <>
      <section className='Branding wrapper'>
        <div className='container'>
          {data.map((value, index) => {
            return (
              <div className='box' key={index}>
                <h3>{value.title}</h3>
                <h2>{value.heading}</h2>
                <p>{value.desc}</p>
                <a href="/contact">
                <button className='primary-btn'>Contact</button>
                </a>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
