import React from 'react';
import styles from '../styles/tags.module.css';

const TagsSelector = ( {handleChange} ) => {
  return (
    <section className={styles.wrapper}>
        <label className={styles.label} htmlFor='tags'>Choisissez une catégorie :</label>
        <select className={styles.select} name='tags' id='tags' onChange={handleChange}>
          <option value=''>
            Tout voir
          </option>
          <option value='mariage'>Mariage</option>
          <option value='grossesse'>Grossesse</option>
          <option value='bebe'>Bébé</option>
          <option value='famille'>Famille</option>
          <option value='bapteme'>Baptême</option>
          <option value='couple'>Couple</option>
        </select>
      </section>
  )
}

export default TagsSelector;