import Head from 'next/head';
import React from 'react';
import ContatcForm from '../Components/ContatcForm';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta 
          name="description" 
          content="Pour toute demande de prestations qui ne figurent pas dans celles indiquées et pour échanger concernant le devis pour votre mariage envoyez moi un mail via le formulaire ou contactez moi par téléphone"
        />
        <link rel="icon" href="/favicon-96x96.png" />
      </Head>
        <h1>Contact</h1>
        <section className={styles.contentWrapper}>
          <ContatcForm/>
        </section>
    </div>
  )
}

export default Contact