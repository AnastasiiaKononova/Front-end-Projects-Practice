import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PriceBox from '../../components/PriceBox/PriceBox';
import styles from './PricingPage.module.sass';
import PricingSelect from '../../components/PricingSelect/PricingSelect';
import PackageOverview from '../../components/PackageOverview/PackageOverview';
import AdditionalInfo from '../../components/AdditionalInfo/AdditionalInfo';
import cn from 'classnames';

const PricingPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles.pricingOptions}>
          <div className={cn(styles.container, styles.containerPricing)}>
            <div className={cn(styles.wrapper, styles.textCenter)}>
              <PricingSelect />
            </div>
            <div className={cn(styles.wrapper, styles.textRight)}>
              <iframe
                src='https://iframe.mediadelivery.net/embed/239474/9049a5fb-c8cd-47d7-8b7e-87384c1bf577?autoplay=false&amp;loop=false&amp;muted=false&amp;preload=true&amp;responsive=true'
                loading='lazy'
                allow='accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;'
                title='Atom Purchase Process'
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </section>
        <section className={styles.pricingSection}>
          <div className={styles.container}>
            <PriceBox />
          </div>
        </section>
        <section>
          <div className={styles.container}>
            <PackageOverview />
          </div>
        </section>
        <section className={styles.addInfo}>
          <div className={cn(styles.container, styles.containerAditionalInfo)}>
            <AdditionalInfo />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PricingPage;
