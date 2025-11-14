import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Testimonial from './components/Testimonial';
import Services from './components/Services';
import Brainstormer from './components/Brainstormer';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-white text-brand-charcoal font-open-sans">
      <Header />
      <main>
        <Hero />
        <Work />
        <Testimonial />
        <Services />
        <Brainstormer />
        <About />
      </main>
      <Contact />
    </div>
  );
};

export default App;