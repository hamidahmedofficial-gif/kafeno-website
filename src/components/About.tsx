import React from 'react';
import aboutProduct from '../assets/hero-beans.jpg';

const About: React.FC = () => {
  const benefits = [
    "Compact and easy to carry",
    "Smooth and balanced flavor everytime",
    "Instant Energy (No prep)",
    "Pocket-sized Convenience",
    "Stronger than regular coffee",
    "Saves Time and Budget friendly. (No Long queues. No Expensive cups)"
  ];

  return (
    <section id="about" className="py-[120px] bg-[#D0833D]/10 overflow-hidden relative">
      <div className="container mx-auto px-[120px] max-md:px-[32px] flex flex-col md:flex-row items-center gap-[60px] md:gap-[40px] xl:gap-[80px]">
        {/* Left: Content */}
        <div className="flex-1 max-w-[615px] space-y-[24px]">
          <div className="inline-flex px-[10px] py-[6px] bg-[rgba(208,131,61,0.1)] rounded-[100px] items-center justify-center">
            <span className="text-[#d0833d] font-['Metrophobic',sans-serif] text-[14px] max-md:text-[8.2px] whitespace-nowrap">
              Why Choose Us?
            </span>
          </div>

          <h2 className="text-black font-['Samsung_Sharp_Sans',sans-serif] text-[54px] max-md:text-[31.8px] font-bold leading-none tracking-[-1.08px] max-md:tracking-[-0.63px]">
            Meet Your Daily Coffee Companion
          </h2>

          <div className="font-['Metrophobic',sans-serif] text-[#1d1d1d] text-[22px] max-md:text-[12.5px] leading-[32px] max-md:leading-[18.2px]">
            <p className="mb-0">Designed for real life, not just coffee lovers.</p>
            <ul className="list-disc ml-[33px] max-md:ml-[18.7px]">
              {benefits.map((benefit, index) => (
                <li key={index} className="mb-0">
                  <span className="leading-[32px] max-md:leading-[18.2px]">{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-[32px] max-md:mt-[18.2px]">
              Coffee should be simple. Kafeno puts a smooth, powerful coffee boost right in your pocket. Whether you’re rushing, working, or resetting, it’s always ready. No machines. No queues. Just open and go.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 w-full max-w-[591px] relative flex flex-col items-center">
          <div className="relative w-full h-[609px] max-md:h-[401px] overflow-hidden rounded-[20px]">
            <img src={aboutProduct} alt="Kafeno Shots" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
