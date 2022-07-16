import React from 'react';
import ContatcForm from '../Components/ContatcForm';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div>
        <h1>Contact</h1>
        <section className={styles.contentWrapper}>
          <ContatcForm/>
        </section>
    </div>
  )
}

export default Contact