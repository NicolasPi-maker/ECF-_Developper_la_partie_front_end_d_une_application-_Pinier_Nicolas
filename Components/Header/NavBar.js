import React, { useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link'

const NavBar = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <nav className={styles.navMenu}>
      <div className={styles.navDots} onClick={() => (setIsShow(!isShow))}></div>
      <div>
      {isShow &&
        <div className={styles.navbar}>
          <ul className={styles.navbarNav}>
              <li><Link href='/'><a>Accueil</a></Link></li>
              <li><Link href='/galerie'><a>Galerie</a></Link></li>
              <li><Link href='/benefits'><a>Tarifs & Prestations</a></Link></li>
              <li><Link href='/contact'><a>Contact</a></Link></li>
          </ul>
        </div>
      }
      </div>
    </nav>
  )
}

export default NavBar;