import React from 'react';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import iconInstagram from '../assets/icon-instagram.svg';

const Gallery: React.FC = () => {
  const images = [
    { src: gallery1, title: 'Instant Energy' },
    { src: gallery2, title: 'Coffee vs Coffee' },
    { src: gallery3, title: 'No Time? No Problem' },
    { src: gallery4, title: 'Fuel Your Hustle' }
  ];

  return (
    <section id="gallery" className="w-full py-[120px] bg-white overflow-hidden relative">
      <div className="container mx-auto px-[120px] max-md:px-[32px] flex flex-col gap-[60px] max-md:gap-[44px]">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-[24px]">
          <div className="flex flex-col items-start gap-[14px]">
            <div className="bg-[rgba(208,131,61,0.1)] px-[10px] py-[6px] rounded-[100px] flex items-center justify-center">
              <span className="capitalize text-[#d0833d] font-['Metrophobic',sans-serif] text-[14px] max-md:text-[10px] whitespace-nowrap">
                See It in Action
              </span>
            </div>
            <h2 className="text-black font-['Samsung_Sharp_Sans',sans-serif] font-bold text-[54px] max-md:text-[30.2px] tracking-[-1.08px] max-md:tracking-[-0.6px] leading-[normal] max-md:leading-[38px]">
              Energy That Moves With You
            </h2>
            <p className="text-[#1d1d1d] opacity-60 font-['Metrophobic',sans-serif] text-[22px] max-md:text-[12px]">
              Watch how people use coffee shots in real life.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-[11px] pb-[10px] max-md:hidden">
            <div className="w-[80px] h-[52px] rounded-[18px] border border-[rgba(208,131,61,0.25)] flex items-center justify-center cursor-pointer hover:bg-[rgba(208,131,61,0.05)] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180 text-black">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
            <div className="w-[80px] h-[52px] rounded-[18px] bg-[#d0833d] flex items-center justify-center cursor-pointer hover:bg-[#d0833d]/90 transition-colors shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="w-full flex flex-col md:flex-row gap-[25px] overflow-hidden max-md:overflow-x-auto max-md:pb-4 max-md:snap-x">
          {images.map((img, index) => (
            <div key={index} className="relative shrink-0 w-[285px] max-md:w-[225.5px] h-[420px] max-md:h-[332.3px] rounded-[20px] max-md:rounded-[15px] overflow-hidden group max-md:snap-center">
              <img src={img.src} alt={img.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-transparent to-[rgba(29,29,29,0.1)] opacity-80 pointer-events-none"></div>
              
              {/* Instagram Label */}
              <div className="absolute top-[20px] left-[20px] max-md:top-[15.8px] max-md:left-[15.8px] flex items-center gap-[6px] max-md:gap-[4.7px] backdrop-blur-[5px] bg-[rgba(208,131,61,0.1)] px-[14px] max-md:px-[11px] py-[10px] max-md:py-[8px] rounded-[10px] max-md:rounded-[8px]">
                <img src={iconInstagram} alt="IG" className="w-[16px] h-[16px] max-md:w-[12.6px] max-md:h-[12.6px] invert opacity-80" />
                <span className="text-[#d0833d] font-['Metrophobic',sans-serif] text-[14px] max-md:text-[11px] whitespace-nowrap">
                  INSTAGRAM
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-[40px] left-[24px] max-md:bottom-[31px] max-md:left-[19px]">
                <h3 className="text-white font-['Playfair_Display',serif] font-semibold text-[24px] max-md:text-[19px] whitespace-nowrap">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
