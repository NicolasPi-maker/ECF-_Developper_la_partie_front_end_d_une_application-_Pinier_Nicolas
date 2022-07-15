import React, { useState } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import styles from '../styles/Galerie.module.css';
import GalerieCard from '../Components/GalerieCard';
import TagsSelector from '../Components/TagsSelector';

const Galerie = ( {photos} ) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(selectedCategory);
  };

  return (
    <div>
      <h1>Galerie</h1>
      <div>
        <TagsSelector handleChange={handleChange}/>
        <section className={styles.contentWrapper}>
          {
            photos.map((photo, i) => {
              if(photo.photo) {
                if(selectedCategory !== '') {
                  if(photo.categories.find(categorie => categorie === selectedCategory)) {
                    return (
                      <GalerieCard
                        key={i}
                        title = {photo.titre}
                        descritpion = {photo.description}
                        categories = {photo.categories}
                        picture = {photo.photo}
                      />
                    )
                  }
                } else {
                  return (
                    <GalerieCard
                      key={i}
                      title = {photo.titre}
                      descritpion = {photo.description}
                      categories = {photo.categories}
                      picture = {photo.photo}
                    />
                  )
                }
              }
            })
          }
        </section>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  // List of files in blgos folder
  const filesInPhotos = fs.readdirSync('./Posts')

  // Get the front matter and slug (the filename without .md) of all files
  const photos = filesInPhotos.map(filename => {
    const file = fs.readFileSync(`./Posts/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })

  return {
    props: {
      photos : JSON.parse(JSON.stringify(photos)) 
    }
  }

}

export default Galerie;