import React from 'react';

const CaseStudyCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-montserrat font-bold text-brand-orange mb-4">{title}</h3>
    <div className="space-y-3 text-gray-700">{children}</div>
  </div>
);

const Work: React.FC = () => {
  return (
    <section id="work" className="py-20 px-6 bg-brand-light-gray">
      <div className="container mx-auto">
        <h2 className="text-4xl font-montserrat font-bold text-center text-brand-charcoal mb-12">
          My Work in Action
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <CaseStudyCard title="Case Study 1: Data Fluent Academy (Tech Startup)">
            <p><strong className="font-semibold text-brand-charcoal">The Challenge:</strong> The client's LinkedIn and Instagram pages were inactive and unoptimized. They had a follower count of only 7 people.</p>
            <p><strong className="font-semibold text-brand-charcoal">The Solution:</strong> I performed a full audit and optimization.</p>
            <div>
              <strong className="font-semibold text-brand-charcoal">The Results:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>2,570% follower growth on LinkedIn (from 7 to 187 followers).</li>
                <li>Established a consistent brand voice and content flow.</li>
                <li>Published a key thought-leadership article on data analysis.</li>
              </ul>
            </div>
          </CaseStudyCard>
          <CaseStudyCard title="Case Study 2: My Journey Inc (NGO)">
             <p><strong className="font-semibold text-brand-charcoal">The Challenge:</strong> The NGO had zero social media presence.</p>
            <p><strong className="font-semibold text-brand-charcoal">The Solution:</strong> I built their digital presence from the ground up.</p>
            <div>
              <strong className="font-semibold text-brand-charcoal">The Results:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>814 new followers on their Facebook page (growth from 0).</li>
                <li>210 new, dedicated subscribers on their YouTube channel (growth from 0).</li>
                <li>Successfully established a foundational online community.</li>
              </ul>
            </div>
          </CaseStudyCard>
        </div>
      </div>
    </section>
  );
};

export default Work;