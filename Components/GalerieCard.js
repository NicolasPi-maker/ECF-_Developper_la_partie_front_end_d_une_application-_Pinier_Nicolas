import React from 'react';
import Image from 'next/image';
import styles from './card.module.css';

const GalerieCard = ( { title, description, categories, picture } ) => {
  return (
    <article>
        <div className={styles.picture}>
            <Image className={styles.picture}
                src={picture}
                alt={title}
                height={500}
                width={500}
            />
        </div>
    </article>
  )
}

export default GalerieCard