import React from 'react';

const servicesData = [
  { title: "Social Media Strategy & Consulting", text: "A custom-built roadmap for your brand." },
  { title: "Content Creation (My Specialty)", text: "I specialize in turning your long-form content into engaging posts." },
  { title: "Community Management (My Focus)", text: "This is my core focus. I'm in your comments, DMs, and mentions." },
  { title: "Analytics & Reporting", text: "Digging into the data to find out what's working." },
  { title: "Social Media Advertising (Paid Social)", text: "Using targeted ads on Facebook and Instagram." },
  { title: "Account Setup & Optimization", text: "Building your 'social media home' from scratch." },
];

const ServiceCard: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <h3 className="text-xl font-montserrat font-bold text-brand-orange mb-3">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-montserrat font-bold text-center text-brand-charcoal mb-12">
          Building Your Online Tribe
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} title={service.title} text={service.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;