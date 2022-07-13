import Head from 'next/head';
import HomeHeader from '../Components/HomePageLayout/HomeHeader';
import Layout from '../Components/UI/Layout';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHeader/>
    </div>
  )
};

export default Home;
