import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './styles.module.css';

const Layout = ({children}) => {

  return (
    <>
        <Header/>
          <main className={styles.mainContent}>{children}</main>
        <Footer/>
    </>
  )
};

export default Layout;