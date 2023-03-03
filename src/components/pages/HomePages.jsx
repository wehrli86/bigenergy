import React from "react"
import Home from "../home/homes/Home"
import Branding from "../home/Branding"
import About from "../home/about/About"
import Services from "../home/servicess/Services"
import Wrapper from "../home/Wrapper"
import Skill from "../home/Skill"
import WrapperOne from "../home/WrapperOne"
import Work from "../home/work/Work"
import Blog from "../home/blog/Blog"

const HomePages = () => {
  return (
    <>
      <Home key="home" />
      <Branding key="branding" />
      <About key="about" />
      <Services key="services" />
      <Wrapper key="wrapper" />
      <Skill key="skill" />
      <WrapperOne key="wrapperone" />
      <Work key="work" />
      <Blog key="blog" />
    </>
  )
}

export default HomePages
