import React,{ useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Logo from '../../img/brand_logo.png';
import NavBar from './NavBar';
import Link from 'next/link';


const Header = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            <Image 
              src={Logo}
              alt='logo de charles cantin photographe'
              width={60}
              height={60}
            />
          </a>
        </Link>
        
      </div>
        <NavBar/>
    </div>
  )
}

export default Header;