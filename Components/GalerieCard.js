import React from 'react';
import Image from 'next/image';
import styles from '../styles/card.module.css';

const GalerieCard = ( { title, description, categories, picture } ) => {

  return (
    <article>
        <div className={styles.pictureWrapper}>
            <Image className={styles.picture}
                src={picture}
                alt={title}
                height={450}
                width={450}
            />
            <h4 className={styles.picturetitle}>{title}</h4>
            <p className={styles.description}>{description}</p>
        </div>
    </article>
  )
}

export default GalerieCard