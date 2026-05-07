import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="relative w-full md:min-h-[423px] py-[120px] bg-[#D0833D]/10 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-[14px] text-center px-6 w-full max-w-[795px]">
        <div className="bg-[rgba(208,131,61,0.1)] px-[10px] py-[6px] rounded-[100px] flex items-center justify-center">
          <span className="capitalize text-[#d0833d] font-['Metrophobic',sans-serif] text-[14px] max-md:text-[8.36px] whitespace-nowrap">
            Get your energy fix
          </span>
        </div>

        <h2 className="text-black font-['Samsung_Sharp_Sans',sans-serif] font-bold text-[54px] max-md:text-[31.8px] tracking-[-1.08px] max-md:tracking-[-0.63px] leading-tight">
          Your Coffee. Your Control
        </h2>

        <div className="text-[#1d1d1d] font-['Metrophobic',sans-serif] text-[22px] max-md:text-[12px] w-full md:w-[795px] leading-[32px] max-md:leading-[18px]">
          <p className="mb-0">Stop adjusting your day around coffee.</p>
          <p>Let coffee adjust to you.</p>
        </div>

        <button className="mt-[10px] bg-[#d0833d] hover:bg-[#d0833d]/90 text-white font-['Outfit',sans-serif] font-semibold text-[22px] max-md:text-[15.9px] px-[28px] py-[14px] max-md:px-[20px] max-md:py-[10px] rounded-[18px] max-md:rounded-[13px] transition-all">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
