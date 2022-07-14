import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import { useState } from 'react'

const GetPhotoDatas = ({ photos }) => {
  const [selectedCategory, setSelectedCategory] = useState('mariage');

  return (
    <div>
      {
        photos.map((photo, i) => {
          console.log(photo.photo.slice(7))
          console.log(photo.categories)
          if(selectedCategory !== '') {
            if(photo.categories.find(categorie => categorie === selectedCategory)) {
              return (
                <div key={i}>
                  <h1>{photo.titre}</h1>
                  <p>{photo.description}</p>
                  <p>{photo.categories.join(' ')}</p>
                  {photo.date_de_publication ? photo.date_de_publication : 'Aucune date'}
                  <Image src={photo.photo} width={400} height={400} alt={photo.titre}/>
                </div>
              )
            }
          } else {
            return (
              <div key={i}>
                <h1>{photo.titre}</h1>
                <p>{photo.description}</p>
                <p>{photo.categories.join(' ')}</p>
                {photo.date_de_publication ? photo.date_de_publication : 'Aucune date'}
                <Image src={photo.photo} width={400} height={400} alt={photo.titre}/>
              </div>
            )
          }
        })
        }
    </div>
  )
}

export default GetPhotoDatas;

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInPhotos = fs.readdirSync('./Posts')

  // Get the front matter and slug (the filename without .md) of all files
  const photos = filesInPhotos.map(filename => {
    const file = fs.readFileSync(`./photos/${filename}`, 'utf8')
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