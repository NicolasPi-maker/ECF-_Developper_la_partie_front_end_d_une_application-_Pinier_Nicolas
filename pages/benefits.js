import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import BenefitsRates from '../Components/BenefitsRates';

const Benefits = ( {rates} ) => {
  console.log(rates);

  return (
    <div>
      <h1>Tarifs et Prestations</h1>
      <section>
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
  // List of files in blgos folder
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
      rates : JSON.parse(JSON.stringify(rates)) 
    }
  }

}

export default Benefits;