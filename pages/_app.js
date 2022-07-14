import '../styles/globals.css';;
import Layout from '../Components/UI/Layout';
import React from 'react';

function MyApp({ Component, pageProps, ...appProps }) {

  const isLayoutNeeded = [`/`].includes(appProps.router.pathname);

  const LayoutComponent = !isLayoutNeeded ? Layout : React.Fragment;

  return (
    <LayoutComponent>
        <Component/>
    </LayoutComponent>
    );
}

export default MyApp;
