import React from 'react';
import NavbarContainer from '../containers/common/NavbarContainer';
import ProductsContainer from '../containers/landing/ProductsContainer';
import HowToUse from '../components/landing/HowToUse';
import LandingHero from '../components/landing/LandingHero';
import Footer from '../components/landing/Footer';
import FeatureOutro from '../components/landing/FeatureOutro';

const LandingPage = () => {
  return (
    <>
      <NavbarContainer />
      <LandingHero />
      <HowToUse />
      <ProductsContainer />
      <FeatureOutro />
      <Footer />
    </>
  );
};

export default LandingPage;
