import React from 'react';
import styles from '../styles/benefitsRates.module.css';

const BenefitsRates = ( {label, description, price, i} ) => {
  return (
    <article key={i} className={styles.wrapper}>
        <h3 className={styles.label}>{`"${label}"`}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price > 0 ? `${price}.00€` : null}</p>
    </article>
  )
}

export default BenefitsRates;