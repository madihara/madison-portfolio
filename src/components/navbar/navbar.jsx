import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logoEdit.png";
import Flip from 'react-reveal'

import styles from "./navbar.module.css"

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div><Flip><img src={logo} alt="logo" className={styles.logo}></img></Flip></div>
      <div className={styles.navlinks}>
        <Link to='/' className={styles.link}>home</Link>
        <Link to='/projects' className={styles.link}>projects</Link>
        <Link to='/contact' className={styles.link}>connect</Link>
      </div>
    </div >
  )
}

export default NavBar
