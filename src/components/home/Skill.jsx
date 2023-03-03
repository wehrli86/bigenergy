import React from "react"

const Skill = () => {
  const Progress = ({ done, title }) => {
    return (
      <div className='progress'>
        <div
          className='progress-done'
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        >
          <h4> {title}</h4>
          <h4> {done}%</h4>
        </div>
      </div>
    )
  }

  const data = [
    {
      title: "DAS LEBEN IST EINE REISE, BEGINNE DEN TAG MIT POWER",
      para: "Gib deinem Körper den Kick, den er braucht, um durch den Tag zu kommen - mit unserem energiereichen Energydrink",
      para1: "Erlebe einen Geschmacksrausch und einen Energieschub in einem - mit unserem erfrischenden Energydrink, der dich auf Hochtouren bringt!",
    },
  ]
  return (
    <>
      <section className='skill'>
        <div className='container'>
          <div className='heading'>
            <h3> Warum BigEnergy</h3>
            <h1>DAS BESTE IN EINER DOSE</h1>
          </div>

          <div className='content flex'>
            <div className='left topMarign'>
              <Progress done='100' title='VEGAN' />
              <Progress done='80' title='SELBSTVERTRAUEN' />
              <Progress done='90' title='DURCHSETZUNGSVERMÖEN' />
              <Progress done='70' title='HUMOR' />
            </div>
            <div className='right mtop'>
              {data.map((val, index) => {
                return (
                  <div key={index}>
                    <h1>{val.title}</h1>
                    <p>{val.para}</p>
                    <p>{val.para1}</p>
                    <a href="/pages">
                    <button className='primary-btn'>BUY NOW</button>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill
