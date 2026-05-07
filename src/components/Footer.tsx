import React from 'react';
import footerBg from '../assets/footer-bg.jpg';
import footerLogo from '../assets/main-logo.svg';
import iconFb from '../assets/icon-facebook.svg';
import iconIg from '../assets/icon-instagram.svg';
import iconWeb from '../assets/icon-web.svg';
import iconLi from '../assets/icon-linkedin.svg';
import iconYt from '../assets/icon-youtube.svg';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full py-[120px] max-md:py-[60px] bg-[#1d1d1d] overflow-hidden flex flex-col items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={footerBg} alt="" className="w-full h-full object-cover opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-[120px] max-md:px-[32px] relative z-10 w-full flex flex-col gap-[60px] max-md:gap-[40px]">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-[60px] max-md:gap-[40px] w-full">
          
          {/* Logo & Description */}
          <div className="flex flex-col gap-[20px] max-w-[280px]">
            <img src={footerLogo} alt="Kafeno" className="w-[146px] h-auto" />
            <div className="font-['Outfit',sans-serif] font-light text-white opacity-80 text-[18px] max-md:text-[11px] leading-[26px] max-md:leading-[18.7px]">
              <p className="mb-0">Instant energy. No waiting</p>
              <p>Built for people who move fast.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-[16px]">
            <h4 className="font-['Outfit',sans-serif] font-bold text-[24px] max-md:text-[17px] text-white capitalize">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-[8px] font-['Outfit',sans-serif] font-normal text-[16px] max-md:text-[11px] text-white opacity-80">
              <li><a href="#" className="hover:text-[#d0833d] transition-colors">How to place order?</a></li>
              <li><a href="#" className="hover:text-[#d0833d] transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-[#d0833d] transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-[#d0833d] transition-colors">Policy</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-[16px]">
            <h4 className="font-['Outfit',sans-serif] font-bold text-[24px] max-md:text-[17px] text-white capitalize">
              Shop
            </h4>
            <ul className="flex flex-col gap-[8px] font-['Outfit',sans-serif] font-normal text-[16px] max-md:text-[11px] text-white opacity-80">
              <li><a href="#" className="hover:text-[#d0833d] transition-colors">6 Shot Pack</a></li>
              <li><a href="#" className="hover:text-[#d0833d] transition-colors">12 Shot Pack</a></li>
              <li><a href="#" className="hover:text-[#d0833d] transition-colors">Custom Pack</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[16px]">
              <h4 className="font-['Outfit',sans-serif] font-bold text-[24px] max-md:text-[17px] text-white capitalize">
                Contact
              </h4>
              <div className="font-['Outfit',sans-serif] font-normal text-[16px] max-md:text-[11px] text-white opacity-80 flex flex-col gap-[8px]">
                <p className="mb-0">kafenocoffee@gmail.com</p>
                <a href="#" className="underline decoration-[#d0833d] underline-offset-4 hover:text-[#d0833d] transition-colors">
                  Open a Chat with Us
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-[14px]">
              {[iconFb, iconIg, iconWeb, iconLi, iconYt].map((icon, i) => (
                <a key={i} href="#" className="w-[34px] h-[34px] max-md:w-[23.5px] max-md:h-[23.5px] bg-[rgba(255,255,255,0.05)] rounded-[6px] max-md:rounded-[4px] flex items-center justify-center hover:bg-[#d0833d] transition-colors group">
                  <img src={icon} alt="Social" className="w-[18px] h-[18px] opacity-80 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Separator & Copyright */}
        <div className="w-full flex flex-col gap-[40px]">
          <div className="w-full h-px bg-white opacity-[0.05]"></div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-[16px] font-['Outfit',sans-serif] font-normal text-[16px] max-md:text-[10px] text-white opacity-50">
            <p className="mb-0">© 2026 Kafeno. All rights reserved.</p>
            <div className="flex items-center gap-[24px] max-md:gap-[12px]">
              <a href="#" className="hover:text-[#d0833d] transition-colors">Privacy Policy</a>
              <div className="w-[6px] h-[6px] rounded-full bg-white opacity-10"></div>
              <a href="#" className="hover:text-[#d0833d] transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
