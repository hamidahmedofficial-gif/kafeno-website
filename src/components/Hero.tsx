import React from 'react';
import heroBg from '../assets/hero-bg.jpg';
import heroBeans from '../assets/hero-coffee.png';
// import iconBolt from '../assets/icon-bolt.svg';
import kafenoVector from '../assets/main-logo.svg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-[897px] md:h-[720px] overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative w-full h-full max-w-[1440px] mx-auto">
        {/* Hero Beans Image */}
        <div className="absolute 
          left-[37px] top-[432px] w-[356px] h-[445px] 
          md:left-[50px] md:top-[120px] md:w-[380px] md:h-[475px]
          lg:left-[100px] lg:top-[110px] lg:w-[420px] lg:h-[525px]
          xl:left-[178px] xl:top-[99px] xl:w-[465px] xl:h-[581px]">
          <img
            src={heroBeans}
            alt="Kafeno Coffee Shot"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Block */}
        <div className="absolute flex flex-col items-center md:items-start
          left-1/2 -translate-x-1/2 top-[141px] gap-[22px] w-[395px] max-w-[90vw] text-center
          md:left-[50%] md:-translate-x-0 md:top-[250px] md:gap-[24px] md:w-[350px] md:text-left
          lg:left-[50%] lg:top-[260px] lg:gap-[30px] lg:w-[450px]
          xl:left-[calc(50%+23px)] xl:top-[270px] xl:gap-[34px] xl:w-auto">


          {/* KAFENO Vector Logo */}
          <div className="w-[255px] h-[63px] md:w-[280px] md:h-[70px] lg:w-[300px] lg:h-[75px] xl:w-[325px] xl:h-[80px]">
            <img src={kafenoVector} alt="KAFENO" className="w-full h-full object-contain" />
          </div>

          {/* Tagline with Bolt */}
          <div className="flex items-center gap-[11px] md:gap-[12px] xl:gap-[14px]">
            <h2 className="text-white font-['Samsung_Sharp_Sans',sans-serif] font-bold tracking-[-0.44px] md:tracking-[-0.56px] text-[22px] md:text-[20px] lg:text-[24px] xl:text-[28px] whitespace-nowrap">
              Fuel Your Day. Anytime. Anywhere.
            </h2>
          </div>

          {/* Description */}
          <p className="text-white/80 font-['Metrophobic',sans-serif] text-[15.7px] md:text-[16px] lg:text-[18px] xl:text-[20px] w-full xl:w-[502px] leading-normal">
            Kafeno is your pocket-friendly coffee boost. No brewing. No waiting. No hassle. Just instant energy when you need it the most.
          </p>

          {/* Shop Button */}
          <a href="#products" className="bg-[#d0833d] flex items-center justify-center 
            px-[22px] py-[11px] rounded-[14.16px] text-[17.3px]
            md:px-[24px] md:py-[12px] md:rounded-[16px] md:text-[18px]
            xl:px-[28px] xl:py-[14px] xl:rounded-[18px] xl:text-[22px] 
            text-white font-['Outfit',sans-serif] font-semibold transition-all hover:bg-[#d0833d]/90">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
