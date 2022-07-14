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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
