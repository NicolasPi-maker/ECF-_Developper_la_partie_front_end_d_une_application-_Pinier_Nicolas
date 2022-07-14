import React from 'react';
import NavBar from '../Header/NavBar';
import styles from './styles.module.css';
import LogoName from '../../img/brand_background.png';
import Image from 'next/image'

const HomeHeader = () => {
  return (
    <header className={styles.wrapper}>
        <div>
          <Image 
            src={LogoName}
            alt='charles cantin photographe logo and name'
            width={1200}
            height={1200}
          />
        </div>
    </header>
  )
}

export default HomeHeader