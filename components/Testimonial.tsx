import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-brand-charcoal text-white">
      <div className="container mx-auto max-w-3xl text-center">
        <blockquote className="relative">
          <p className="text-2xl md:text-3xl italic">
            "Working with Joseph (SocialMediaJoe) has been fantastic. He truly helped our organization see how to maximize social media to build our community and achieve our goals."
          </p>
          <footer className="mt-6 font-semibold text-brand-orange">
            — Eniola, General Manager at My Journey Inc (NGO)
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonial;