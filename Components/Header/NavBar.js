import React, { useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link'

const NavBar = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div>
        <nav>
            <p className={styles.navDots} onClick={() => setIsShow(!isShow)}>...</p>
        </nav>
      </div>
      {isShow &&
        <nav className={styles.navbar}>
          <ul className={styles.navbarNav}>
              <li><Link href='/'><a>Accueil</a></Link></li>
              <li><Link href='/galerie'><a>Galerie</a></Link></li>
              <li><Link href='/benefits'><a>Tarifs & Prestations</a></Link></li>
              <li><Link href='/contact'><a>Contact</a></Link></li>
          </ul>
        </nav>
      }
    </div>
  )
}

export default NavBar;