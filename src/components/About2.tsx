import React from 'react';
import aboutProduct2 from '../assets/about-image2.png';

const About2: React.FC = () => {
  const benefits = [
    "No waiting time",
    "Budget-friendly coffee option",
    "Perfect for busy days",
    "Travel-ready and portable",
    "No equipment needed"
  ];

  return (
    <section id="unique" className="bg-[#D0833D]/10 overflow-hidden relative w-full flex flex-col md:flex-row">
      {/* Left: Image area — main (623×582) + secondary strip (623×104) */}
      <div className="w-full md:w-[43.26vw] xl:w-[max(623px,calc(50vw-720px+623px))] order-2 md:order-1 flex-shrink-0 flex flex-col">
        <div className="w-full h-[300px] md:h-[582px]">
          <img src={aboutProduct2} alt="Why People Are Switching to Kafeno" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right: Content (Flipped on desktop, above on mobile) */}
      <div className="w-full md:flex-1 flex justify-start items-center order-1 md:order-2 px-[32px] md:px-[4vw] xl:px-0 xl:pl-[127px] py-[60px] md:py-0">
        <div className="w-full max-w-[611px] space-y-[24px]">
          <div className="inline-flex px-[10px] py-[6px] bg-[rgba(208,131,61,0.1)] rounded-[100px] items-center justify-center">
            <span className="text-[#d0833d] font-['Metrophobic',sans-serif] text-[14px] max-md:text-[8.2px] whitespace-nowrap">
              What Makes Us Unique?
            </span>
          </div>

          <div className="flex items-stretch gap-5 mb-6">

            {/* Vertical brown line — Figma: Rectangle 6, 4px wide, 120px tall, #d0833d */}
            <div
              className="rounded-sm shrink-0"
              style={{
                width: '4px',
                height: '140px',
                backgroundColor: '#d0833d'
              }}
            />

            {/* Heading text next to the line */}
            <h2
              className="font-['Playfair_Display'] font-semibold text-black leading-tight"
              style={{ fontSize: '54px', letterSpacing: '-1.08px', width: '583px' }}
            >
              Why People Are Switching to Kafeno
            </h2>

          </div>

          <div className="font-['Metrophobic',sans-serif] text-[#1d1d1d] text-[22px] max-md:text-[12.5px] leading-[32px] max-md:leading-[18.2px]">
            <ul className="list-disc ml-[33px] max-md:ml-[18.7px]">
              {benefits.map((benefit, index) => (
                <li key={index} className="mb-0">
                  <span className="leading-[32px] max-md:leading-[18.2px]">{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-[32px] max-md:mt-[18.2px]">
              Kafeno Coffee is built for your lifestyle. Always there in your low-energy moments, your long days, and your quick breaks. Not just coffee. A small push to keep going.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
