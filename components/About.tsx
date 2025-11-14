import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-montserrat font-bold text-brand-charcoal mb-6">
          Hi, I'm Joseph
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          My approach is community-focused. I'm not a 'set it and forget it' manager. I love talking to the audience, building relationships, and creating a loyal tribe. My specialty is turning long-form content—like webinars or event footage—into exciting, short video clips that get people talking. I believe in starting conversations, not just posting content.
        </p>
      </div>
    </section>
  );
};

export default About;