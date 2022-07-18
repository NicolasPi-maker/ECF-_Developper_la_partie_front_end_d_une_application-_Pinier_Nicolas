import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link'

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const handleClick = () => {
    // Onclick open or close navbar menu on mobile
    setIsNavExpanded(!isNavExpanded)
    console.log(isNavExpanded);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.dotsWrapper}>
        <div className={styles.navDots} onClick={handleClick}></div>
      </div>
        <ul className={isNavExpanded ? `${styles.navbarNav} ${styles.static}` :  `${styles.navbarNav} ${styles.responsive}`}>
            <li onClick={handleClick}><Link href='/'><a>Accueil</a></Link></li>
            <li onClick={handleClick}><Link href='/galerie'><a>Galerie</a></Link></li>
            <li onClick={handleClick}><Link href='/benefits'><a>Tarifs & Prestations</a></Link></li>
            <li onClick={handleClick}><Link href='/contact'><a>Contact</a></Link></li>
        </ul>
    </nav>
  )
}

export default NavBar;