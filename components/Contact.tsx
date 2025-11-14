import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

const socialLinks = [
  { href: 'https://www.instagram.com/socialmediajoe1/', icon: <InstagramIcon />, label: 'Instagram' },
  { href: 'https://web.facebook.com/serumu.joseph', icon: <FacebookIcon />, label: 'Facebook' },
  { href: 'https://www.linkedin.com/in/eshanake-joseph', icon: <LinkedInIcon />, label: 'LinkedIn' },
];

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-20 px-6 bg-brand-charcoal text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-montserrat font-bold mb-4">
          Let's Build Your Community
        </h2>
        <h3 className="text-xl text-gray-300 mb-6">
          Ready to take your social media to the next level? The best way to reach me is by email.
        </h3>
        <a 
          href="mailto:Ofudjejoseph@gmail.com"
          className="text-2xl font-bold text-brand-orange hover:underline transition-colors"
        >
          Ofudjejoseph@gmail.com
        </a>
        <div className="flex justify-center space-x-6 mt-8">
          {socialLinks.map(link => (
            <a 
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gray-400 hover:text-brand-orange transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
         <div className="mt-12 border-t border-gray-700 pt-6">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Eshenake Joseph. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;