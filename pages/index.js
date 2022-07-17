import Head from 'next/head';
import HomeFooter from '../Components/HomePageLayout/HomeFooter';
import HomeHeader from '../Components/HomePageLayout/HomeHeader';
import PresentationPhoto from '../img/charles_cantin_photo.jpg';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Accueil</title>
        <meta 
          name="description" 
          content="Je suis Charles Cantin, photograpgre et bienvenue sur mon portfolio, je réalise plusieurs type de préstation, mariage, bapteme, séance photo solo et duo, n'hésitez pas à me contacter !"
        />
        <link rel="icon" href="/favicon-96x96.png" />
      </Head>
      <HomeHeader/>
        <main className={styles.main}>
          <Image
            src={PresentationPhoto}
            alt= 'photographie de Charles Cantin le photographe'
            layout='fill'
            objectFit='cover'
          />
          <div className={`${styles.content} ${styles.descriptionTitle}`}>
            <h2>Une photo vaut mieux que mille mots</h2>
          </div>
          <div className={`${styles.content} ${styles.description}`}>
            <p>
            dolor, vel venenatis lacus. Mauris venenatis enim ac eros sollicitudin interdum. Vestibulum sagittis ligula et fringilla pulvinar. Phasellus suscipit velit neque, at vulputate ligula vulputate et. Suspendisse nec diam varius, pharetra nisi et, commodo libero. Mauris fringilla dolor leo, sed suscipit ligula facilisis pulvinar.
            </p>
          </div>
          <div className={`${styles.content} ${styles.description} ${styles.descriptionOptionalOne}`}>
            <p>
            dolor, vel venenatis lacus. Mauris venenatis enim ac eros sollicitudin interdum. Vestibulum sagittis ligula et fringilla pulvinar. Phasellus suscipit velit neque, at vulputate ligula vulputate et. Suspendisse nec diam varius, pharetra nisi et, commodo libero. Mauris fringilla dolor leo, sed suscipit ligula facilisis pulvinar.
            </p>
          </div>
          <div className={`${styles.content} ${styles.description} ${styles.descriptionOptionalTwo}`}>
            <p>
            dolor, vel venenatis lacus. Mauris venenatis enim ac eros sollicitudin interdum. Vestibulum sagittis ligula et fringilla pulvinar. Phasellus suscipit velit neque, at vulputate ligula vulputate et. Suspendisse nec diam varius, pharetra nisi et, commodo libero. Mauris fringilla dolor leo, sed suscipit ligula facilisis pulvinar.
            </p>
          </div>
        </main>
      <HomeFooter/>
    </div>
  )
};

export default Home;
