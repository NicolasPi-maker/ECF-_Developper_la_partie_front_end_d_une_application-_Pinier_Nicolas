import React, { useState } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import GalerieCard from '../Components/GalerieCard';

export default function Test({photos}) {
  
  console.log(photos);
  return (
    <div>
      {
        photos.map((photo, i) => {
          if(photo.photo) {
            return (
              <GalerieCard
                key={i}
                title = {photo.titre}
                descritpion = {photo.description}
                categories = {photo.categories}
                picture = {photo.photo}
              />
            )
          } else {
            return <p>Problème de chargement</p>
          }
        })
      }
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

