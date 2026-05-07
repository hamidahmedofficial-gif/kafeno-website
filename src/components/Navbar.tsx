import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import iconInsta from '../assets/icon-instagram.svg';
// import avatar from '../assets/avatar.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Company', href: '#company' },
    { name: 'Products Offers', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center px-[120px] max-md:px-[16px] ${scrolled ? 'h-[90px] max-md:h-[70px] bg-[#1d1d1d] shadow-lg' : 'h-[120px] max-md:h-[80px] bg-transparent'
        }`}
    >
      <div className="flex items-center justify-between w-full h-full relative">
        {/* Mobile Menu Icon (Left on Mobile, Hidden on Desktop) */}
        <button
          className="md:hidden flex flex-col justify-center items-start w-[33px] h-[33px]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1.5 w-full">
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Logo (Left on Desktop, Center on Mobile) */}
        <div className="flex-shrink-0 max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2">
          <a href="#">
            <img src={logo} alt="Kafeno Logo" className="w-[54px] h-[62px] max-md:w-[46px] max-md:h-[53px] object-contain" />
          </a>
        </div>

        {/* Navigation Links - Desktop Center */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 space-x-[30px] font-ui text-[18px] font-medium text-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#d0833d] transition-colors duration-200 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button + Avatar - Desktop (Right) */}
        <div className="hidden md:flex items-center gap-[12px]">
          <button className="flex items-center gap-[6px] px-[18px] py-[10px] bg-[rgba(208,131,61,0.1)] border border-[rgba(208,131,61,0.1)] hover:bg-[rgba(208,131,61,0.2)] transition-colors rounded-[18px] text-white font-ui text-[18px] font-normal">
            <img src={iconInsta} alt="Instagram" className="w-[24px] h-[24px] " />
            Chat Us on Insta!
          </button>
          {/* <img src={avatar} alt="" className="w-[64px] h-[64px] rounded-full object-cover" /> */}
        </div>

        {/* Action Button - Mobile (Right) */}
        <div className="md:hidden flex">
          <button className="flex items-center gap-[4.15px] px-[12.46px] py-[6.92px] bg-[rgba(208,131,61,0.1)] border border-[rgba(208,131,61,0.1)] hover:bg-[rgba(208,131,61,0.2)] transition-colors rounded-[12.46px] text-white font-ui text-[12.46px] font-normal">
            <img src={iconInsta} alt="Instagram" className="w-[16.6px] h-[16.6px]" />
            Chat Us
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-0 bg-[#1d1d1d] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <button className="absolute top-[24px] left-[16px] w-[33px] h-[33px] flex items-center justify-center z-50" onClick={() => setIsMenuOpen(false)}>
          <span className="block w-8 h-0.5 bg-white rotate-45 absolute"></span>
          <span className="block w-8 h-0.5 bg-white -rotate-45 absolute"></span>
        </button>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white text-2xl font-ui hover:text-[#d0833d]"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
