import React from "react"

const About = () => {
  const data = [
    {
      title: "Was ist in Big Energy enthalten",
      desc1: "Erlebe den ultimativen Energie-Kick mit unserem Energy Drink!",
      desc2: "Unser Energy Drink ist der perfekte Begleiter für lange Tage und durchtanzte Nächte.",
      desc3: "Hol dir jetzt den extra Schub an Energie und sei bereit für alles, was das Leben zu bieten hat!",
      cover: "./assets/about.jpg",
    },
  ]
  return (
    <>
      <section className='about topMarign'>
        <div className='container flex'>
          {data.map((value) => {
            return (
              <React.Fragment key={value.title}>
                <div className='left mtop'>
                  <div className='heading'>
                    <h3>Über das Produkt</h3>
                    <h1>{value.title}</h1>
                  </div>

                  <p>{value.desc1}</p>
                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>
                  <a href="/assets/ingredients.pdf" download>
                  <button className='primary-btn'>INGREDIENTS</button>
                  </a>
                </div>
                <div className='right'>
                  <div className='img'>
                    <img src={value.cover} alt='' />
                  </div>
                </div>
                </React.Fragment>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default About
