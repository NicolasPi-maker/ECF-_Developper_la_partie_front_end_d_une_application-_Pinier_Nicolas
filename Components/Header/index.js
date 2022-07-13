import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Logo from '../../img/brand_logo.png';
import NavBar from './NavBar';


const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Image 
          src={Logo}
          alt='logo de charles cantin photographe'
          width={60}
          height={60}
        />
      </div>
        <NavBar/>
    </div>
  )
}

export default Header;