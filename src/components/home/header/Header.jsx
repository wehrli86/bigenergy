import React, { useState } from "react"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import WorkIcon from "@mui/icons-material/Work"
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-router-dom"

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 180)
  })
  return (
    <>
      <header className='header'>
        <div className='container flex'>
          <div className='logo'>
            <img src='assets/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
              <li key={1}>
                <Link to='/'>Home</Link>
              </li>
              <li key={2}>
                <Link to='/pages'>BUY NOW</Link>
              </li>
              <li key={3}>
                <Link to='/contact'>Contact</Link>
              </li>
              <li key={4}>
                <a href="https://bigdickenergy.ch" target="_blank" rel="noopener noreferrer">anotherone</a>
              </li>
              <li key={4} className='icon'>
                <SearchOutlinedIcon className='HeaderIcon' />
                <WorkIcon className='HeaderIcon' />
                <GridViewTwoToneIcon className='HeaderIcon' />
              </li>
            </ul>
          </div>
          
          <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
