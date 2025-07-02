import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Process />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;