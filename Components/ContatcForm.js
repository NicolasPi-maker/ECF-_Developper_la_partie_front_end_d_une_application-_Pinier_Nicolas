import React from 'react';
import styles from '../styles/form.module.css'

const ContatcForm = () => {
  return (
    <div>
        <form name='contact' method='POST' data-netlify="true">
          <div className={styles.wrapper}>
            <div>
                <label htmlFor='lastName' className={styles.label}>Nom</label>
                <input type='text' name='lastName' id='lastName' required className={styles.input}/>

                <label htmlFor='firstName' className={styles.label}>Prénom</label>
                <input type='text' name='firstName' id='firstName' className={styles.input}/>
            </div>
            <label htmlFor='email' className={styles.label}>Email</label>
            <input type='email' name='email' id='email' required className={styles.input}/>

            <label htmlFor='phoneNumber' className={styles.label}>Téléphone</label>
            <input type='tel' name='phoneNumber' id='phoneNumber' className={styles.input}/>

            <div>
                <label htmlFor='subject' className={styles.label}>Objet</label>
                <input type='text' name='subject' id='subject' className={styles.input}/>

                <label htmlFor='message' className={styles.label}>Méssage</label>
                <textarea name='message' id='message' rows='9' required className={`${styles.input} ${styles.message}`}/>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button type='submit' className={styles.subButton}>Envoyer</button>
          </div>
        </form>
    </div>
  )
}

export default ContatcForm