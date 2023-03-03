import React from "react"

const WrapperOne = () => {
  const data = [
    {
      num: "100%",
      text: "VEGAN",
    },
    {
      num: "99%",
      text: "NACHHALTIG",
    },
    {
      num: "100'000",
      text: "GEPFLANZTE BÄUME",
    },
    {
      num: "1",
      text: "KIOSK",
    },
  ]
  return (
    <>
      <section className='Branding wrapperOne'>
        <div className='container grid1'>
          {data.map((value, index) => {
            return (
              <div key={index} className='box'>
                <h1>{value.num}</h1>
                <p>{value.text}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default WrapperOne
