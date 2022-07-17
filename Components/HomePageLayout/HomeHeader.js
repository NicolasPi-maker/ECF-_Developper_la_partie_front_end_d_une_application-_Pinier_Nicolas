import React from 'react';
import NavBar from '../Header/NavBar';
import styles from './styles.module.css';
import LogoName from '../../img/brand_background.png';
import Image from 'next/image'

const HomeHeader = () => {
  return (
    <header className={styles.header}>
        <NavBar/>
        <div className={styles.backgroundBrand}>
          <Image 
            src={LogoName}
            alt='charles cantin photographe logo and name'
            width={950}
            height={950}
          />
        </div>
    </header>
  )
}

export default HomeHeader