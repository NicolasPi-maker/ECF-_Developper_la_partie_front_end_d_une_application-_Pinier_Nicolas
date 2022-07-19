import React from 'react';
import styles from './styles.module.css';
import LogoName from '../../img/brand_background.png';
import Image from 'next/image';
import NavBar from '../Header/NavBar';

const HomeHeader = () => {
  return (
    <div className={styles.header}>
      <NavBar/>
        <div className={styles.backgroundBrand}>
          <Image
            src={LogoName}
            alt='charles cantin photographe logo and name'
            width={950}
            height={950}
            priority
          />
        </div>
    </div>
  )
}

export default HomeHeader;