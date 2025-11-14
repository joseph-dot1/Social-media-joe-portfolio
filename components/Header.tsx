import React, { useState } from 'react';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';

const navLinks = [
  { href: 'home', label: 'Home' },
  { href: 'work', label: 'Work' },
  { href: 'services', label: 'Services' },
  { href: 'about', label: 'About' },
  { href: 'contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const NavLinkItems = () => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={`#${link.href}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(link.href);
          }}
          className="block py-2 px-4 text-sm font-semibold text-brand-charcoal hover:text-brand-orange transition-colors duration-300"
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home')}} className="text-xl font-bold font-montserrat text-brand-orange">
          SocialMediaJoe
        </a>
        <div className="hidden md:flex space-x-2">
          <NavLinkItems />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="flex flex-col items-center py-4">
            <NavLinkItems />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;