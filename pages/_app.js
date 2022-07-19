import '../styles/globals.css';;
import Layout from '../Components/UI/Layout';
import React from 'react';

function MyApp({ Component, pageProps, ...appProps }) {

  // set home page pathname in isLayoutNeeded variable
  const isLayoutNeeded = [`/`].includes(appProps.router.pathname);

  // if pathname have the home page pathname don't apply general Layout to add a customize Layout
  const LayoutComponent = !isLayoutNeeded ? Layout : React.Fragment;

  return (
    <LayoutComponent>
          <Component {...pageProps}/>
      </LayoutComponent>
    );
}

export default MyApp;
