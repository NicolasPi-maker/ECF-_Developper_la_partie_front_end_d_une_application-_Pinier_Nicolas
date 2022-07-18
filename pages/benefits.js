import Head from 'next/head';
import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import BenefitsRates from '../Components/BenefitsRates';
import styles from '../styles/Benefits.module.css';

const Benefits = ( {rates} ) => {

  return (
    <div>
      <Head>
        <title>Tarifs et Prestations</title>
        <meta 
          lang='fr'
          name="description" 
          content="Mes prestations vont de séance photo en solo et duo jusqu'au bapteme, grossesse et mariage sur devis Je propose plusieurs service sur demande et devis donc n'hésitez pas à me contacter"
        />
        <link rel="icon" href="/favicon-96x96.png" />
      </Head>
      <h1 className={styles.title}>Tarifs et Prestations</h1>
      <section className={styles.contentWrapper}>
        {
          rates.map((rate, i) => {
            return (
              <BenefitsRates
                key={i}
                label={rate.label}
                description={rate.description}
                price={rate.prix} 
              />
            )
          })
        }
      </section>
    </div>
  )
}

export const getStaticProps = async () => {
  // List of files in Tarifs folder
  const filesInPhotos = fs.readdirSync('./Tarifs')

  // Get the front matter and slug (the filename without .md) of all files
  const rates = filesInPhotos.map(filename => {

      const file = fs.readFileSync(`./Tarifs/${filename}`, 'utf8')
      const matterData = matter(file)
      
      return {
        ...matterData.data, // matterData.data contains front matter
        slug: filename.slice(1, filename.indexOf('.'))
      }
    })

  return {
    props: {
      // Add rates object in props component
      rates : JSON.parse(JSON.stringify(rates)) 
    }
  }

}

export default Benefits;