import React from 'react';
import styles from './styles.module.css';
import BackgroundLogo from '../../img/brand_background_rectangle.png';
import Image from 'next/image';
import logoInstagram from '../../img/instagram-colored-logo.png';
import logoFacebook from '../../img/logo-circulaire-facebook.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.backgroundLogo}>
          <Link href='/' target='_blank'>
            <Image
              src={BackgroundLogo} 
              alt='background logo Charles Cantin'
              width={250}
              height={150}
            />
          </Link>
        </div>
        <div className={styles.socialNetworks}>
          <h3>Suivez-Moi</h3>
          <div className={styles.logoWrapper}>
            <div className={styles.socialNetworksLogo}>
              <a href='https://www.instagram.com/?hl=fr' rel='noreferrer' target='_blank'>
                <Image
                  src={logoInstagram}
                  alt='logo instagram'
                  width={40}
                  height={40}
                />
              </a>
            </div>
            <div className={styles.socialNetworksLogo}>
              <a href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
                <Image 
                  src={logoFacebook}
                  alt='logo instagram'
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
          <div className={styles.contact}>
          <a href = 'mailto: charles-cantin@gmail.com'>
            charles-cantin@gmail.com
          </a>
          <a href='tel: 07 12 12 12 12'>
            Tel : 07 12 12 12 12
          </a>
          </div>
        </div>
        <div className={styles.informations}>
          <h3>Informations génerales</h3>
          <Link href='/contact'><a>Contact</a></Link>
          <Link href='/benefits'><a>Tarifs et Prestations</a></Link>
          <Link href='#'><a>Mentions légales</a></Link>
          <Link href='#'><a>Politique de confidentialité</a></Link>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Charles Cantin - photographe - 2022 tous droits réservés</p>
      </div>
    </div>
  )
}

export default Footer;