import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-white flex items-center justify-center py-20 px-6">
      <div className="container mx-auto flex flex-col items-center text-center">
        <img
          src="https://profile-images.xing.com/images/5f0494200445519894451246a48911e3-1/eshenake-joseph.256x256.jpg"
          alt="Eshenake Joseph headshot"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-brand-orange shadow-lg mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-brand-orange">
          Eshenake Joseph
        </h1>
        <h2 className="text-2xl md:text-3xl font-montserrat text-brand-charcoal mt-2">
          Social Media Manager & Community Builder
        </h2>
        <p className="max-w-2xl mt-4 text-lg text-gray-600">
          I help tech startups and non-profits build loyal online tribes. I'm not just about posting content; I'm about starting conversations and building real relationships.
        </p>
        <button
          onClick={scrollToContact}
          className="mt-8 bg-brand-orange text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-brand-orange-dark transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero;