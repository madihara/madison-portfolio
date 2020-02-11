import React from "react"
import Typical from 'react-typical'
import github from '../../images/github-image.svg'
import twitter from '../../images/twitter.svg'
import email from '../../images/e-mail-envelope copy.svg'

import Helmet from 'react-helmet'



import styles from "./hero.module.css"

const Hero = () => {
  return (
    <>

      <div className={styles.container}>
        <div>
          <Typical
            steps={['', 800, 'Madison Haradine', 800]}

            wrapper="h1"
            className={styles.title}
          />
          <h2 className={styles.subTitle}>I'm a passionate Front End Developer and lover of React.  I have experience using modern HTML, CSS, and JavaScript to create responsive, user first websites.  <br></br><br></br>When I'm not building webpages, I love to learn new technologies and have been very interested in doing data visualization with D3.js and diving into serverless computing architecture.</h2>
          <h2 className={styles.subTitle}><br></br><br></br>Full site and mobile version coming soon.</h2>
        </div>
        <div className={styles.hidden}>Mobile version coming soon. Please view on a desktop</div>

      </div>

      <div className={styles.iconBox}>
        <a href="https://github.com/madihara" target="_blank" > <img src={github} alt="github logo" className={styles.icon} /></a>
        <a href="https://twitter.com/madisonharadine" target="_blank"><img src={twitter} alt="twitter logo" className={styles.icon} /></a>
        <a href="mailto:madisonharadine@gmail.com" target="_blank"><img src={email} alt="email icon" className={styles.icon}></img></a>
      </div>

    </>
  )
}

export default Hero
