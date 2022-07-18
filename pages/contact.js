import Head from 'next/head';
import React, { useState } from 'react';
import ContatcForm from '../Components/ContatcForm';
import styles from '../styles/Contact.module.css';
import { useRouter } from 'next/router';

const Contact = () => {

  const [submitterName, setSubmitterName] = useState("");
  const router = useRouter();
  const confirmationScreenVisible = router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;
 
 const ConfirmationMessage = (
   <React.Fragment>
     <h5>
       Thank you for submitting this form. Someone should get back to you within 24-48 hours.
     </h5>
 
     <button onClick={() => router.replace("/contact", undefined, { shallow: true })}> Submit Another Response </button>
   </React.Fragment>
 );

  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta
          lang='fr'
          name="description" 
          content="Pour toute demande de prestations qui ne figurent pas dans celles indiquées et pour échanger concernant le devis pour votre mariage envoyez moi un mail via le formulaire ou contactez moi par téléphone"
        />
        <link rel="icon" href="/favicon-96x96.png" />
      </Head>
        <h1>Contact</h1>
        <section className={styles.contentWrapper}>
          {formVisible ? <ContatcForm/> : ConfirmationMessage}
        </section>
    </div>
  )
}

export default Contact