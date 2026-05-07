import React from 'react';
import step1 from '../assets/step1-icon.svg';
import step2 from '../assets/step2-icon.svg';
import step3 from '../assets/step3-icon.svg';
import arrow from '../assets/arrow.png';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative w-full py-[120px] bg-white flex flex-col items-center justify-center">
      {/* Heading Block */}
      <div className="flex flex-col items-center gap-[14px] text-center mb-[80px] px-6">
        <h2 className="text-black font-['Samsung_Sharp_Sans',sans-serif] font-bold text-[54px] max-md:text-[31.8px] tracking-[-1.08px] max-md:tracking-[-0.63px] leading-[normal] max-md:leading-[40px] whitespace-nowrap">
          Simple. Fast. Effective
        </h2>
        <p className="text-[#1d1d1d] font-['Metrophobic',sans-serif] text-[22px] max-md:text-[16.2px] leading-[32px] max-md:leading-[23.5px]">
          That’s it. No setup. No cleanup.
        </p>
      </div>

      {/* Steps Container */}
      {/* Steps Container */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-[40px] md:gap-[80px] px-6" style={{ position: 'relative', width: '100%' }}>
        
        {/* Step 1 */}
        <div className="flex flex-col items-center gap-[26px]">
          <div style={{
            width: '240px',
            height: '240px', 
            borderRadius: '50%',
            border: '2px dashed rgba(208, 131, 61, 0.5)',
            backgroundColor: '#fdf6ee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src={step1} alt="Step 1" className="relative z-10 w-[100px] h-[100px]" />
          </div>
          <div className="flex flex-col items-center text-center leading-[normal]">
            <span className="text-[#d0833d] font-['Metrophobic',sans-serif] text-[20px] max-md:text-[16px] min-w-full">
              Step 1
            </span>
            <h3 className="text-black font-['Outfit',sans-serif] font-bold text-[34px] max-md:text-[26px] capitalize whitespace-nowrap">
              Tear the pouch
            </h3>
          </div>
        </div>

        {/* Arrow 1 */}
        <div className="hidden md:flex h-[240px] items-center justify-center shrink-0">
          <img src={arrow} alt="" style={{ width: '40px', opacity: 1, display: 'block' }} />
        </div>
        {/* Mobile arrow */}
        <div className="flex md:hidden w-[57px] h-[57px] rotate-90 items-center justify-center my-[10px] shrink-0">
          <img src={arrow} alt="" className="w-full h-auto" style={{ opacity: 1, display: 'block' }} />
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center gap-[26px]">
          <div style={{
            width: '240px',
            height: '240px', 
            borderRadius: '50%',
            border: '2px dashed rgba(208, 131, 61, 0.5)',
            backgroundColor: '#fdf6ee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src={step2} alt="Step 2" className="relative z-10 w-[100px] h-[100px]" />
          </div>
          <div className="flex flex-col items-center text-center leading-[0]">
            <span className="text-[#d0833d] font-['Metrophobic',sans-serif] text-[20px] max-md:text-[16px] leading-[normal] mb-[6px]">
              Step 2
            </span>
            <div className="text-black font-['Outfit',sans-serif] font-bold w-full max-w-[463px]">
              <p className="capitalize text-[34px] max-md:text-[26px] leading-[normal] mb-0">Sip directly or mix With</p>
              <p className="font-normal text-[rgba(0,0,0,0.5)] text-[24px] max-md:text-[22px] leading-[40px]">(cold, with milk, or over desserts)</p>
            </div>
          </div>
        </div>

        {/* Arrow 2 */}
        <div className="hidden md:flex h-[240px] items-center justify-center shrink-0">
          <img src={arrow} alt="" style={{ width: '40px', opacity: 1, display: 'block' }} />
        </div>
        {/* Mobile arrow */}
        <div className="flex md:hidden w-[57px] h-[57px] rotate-90 items-center justify-center my-[10px] shrink-0">
          <img src={arrow} alt="" className="w-full h-auto" style={{ opacity: 1, display: 'block' }} />
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center gap-[26px]">
          <div style={{
            width: '240px',
            height: '240px', 
            borderRadius: '50%',
            border: '2px dashed rgba(208, 131, 61, 0.5)',
            backgroundColor: '#fdf6ee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div className="relative z-10 w-[100px] h-[100px] p-[9%]">
              <img src={step3} alt="Step 3" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="flex flex-col items-center text-center leading-[normal]">
            <span className="text-[#d0833d] font-['Metrophobic',sans-serif] text-[20px] max-md:text-[16px] min-w-full">
              Step 3
            </span>
            <h3 className="text-black font-['Outfit',sans-serif] font-bold text-[34px] max-md:text-[26px] capitalize whitespace-nowrap">
              Feel the boost
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
