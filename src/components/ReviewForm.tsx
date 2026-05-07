import React from 'react';
import stars from '../assets/stars.svg';

const ReviewForm: React.FC = () => {
  return (
    <section id="contact" className="relative w-full py-[120px] bg-white flex flex-col items-center justify-center">

      {/* Heading Block (Outside the box) */}
      <div className="flex flex-col items-center gap-[14px] text-center mb-[60px] px-6">
        <div className="bg-[rgba(208,131,61,0.1)] px-[10px] py-[6px] rounded-[100px] flex items-center justify-center">
          <span className="text-[#d0833d] font-['Metrophobic',sans-serif] text-[14px] max-md:text-[9.55px] whitespace-nowrap">
            Drop Some Love
          </span>
        </div>
        <h2 className="text-black font-['Samsung_Sharp_Sans',sans-serif] font-bold text-[54px] max-md:text-[31.8px] tracking-[-1.08px] max-md:tracking-[-0.63px] leading-[normal] max-md:leading-[40px]">
          Loved Your Kafeno Moment?
        </h2>
        <p className="text-[#1d1d1d] font-['Metrophobic',sans-serif] text-[22px] max-md:text-[12px] leading-[32px]">
          Tell us how it felt. Your feedback helps us make every sip better.
        </p>
      </div>

      {/* Form Container (1200x470 Desktop, matching Figma) */}
      <div className="relative w-full max-w-[1200px] max-md:w-full
        md:h-[470px]
        bg-[rgba(208,131,61,0.1)] border border-[rgba(208,131,61,0.2)] 
        rounded-[40px] max-md:rounded-[30px] px-[44px] py-[40px] max-md:p-[32px]
        flex items-center">

        <form className="w-full flex flex-col gap-[24px]">
          {/* Top Row: Name, Email, Rating */}
          <div className="flex flex-col md:flex-row gap-[20px] w-full">

            {/* Name */}
            <div className="flex-1 flex flex-col gap-[10px]">
              <label className="font-['Outfit',sans-serif] font-semibold text-[#1d1d1d] text-[20px] max-md:text-[16.5px] tracking-[-0.4px]">
                Name <span className="font-light">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-[80px] max-md:h-[50px] bg-[rgba(208,131,61,0.05)] border border-[rgba(208,131,61,0.25)] rounded-[20px] max-md:rounded-[15px] px-[24px] max-md:px-[18px] font-['Outfit',sans-serif] text-[22px] max-md:text-[15px] text-[#1d1d1d] focus:outline-none focus:border-[#d0833d] transition-colors placeholder:text-[#1d1d1d]/40 placeholder:capitalize"
              />
            </div>

            {/* Email */}
            <div className="flex-1 flex flex-col gap-[10px]">
              <label className="font-['Outfit',sans-serif] font-semibold text-[#1d1d1d] text-[20px] max-md:text-[16.5px] tracking-[-0.4px]">
                Email <span className="font-light">(Optional)</span>
              </label>
              <input
                type="email"
                placeholder="Stay Connected With Us"
                className="w-full h-[80px] max-md:h-[50px] bg-[rgba(208,131,61,0.05)] border border-[rgba(208,131,61,0.25)] rounded-[20px] max-md:rounded-[15px] px-[24px] max-md:px-[18px] font-['Outfit',sans-serif] text-[22px] max-md:text-[15px] text-[#1d1d1d] focus:outline-none focus:border-[#d0833d] transition-colors placeholder:text-[#1d1d1d]/40 placeholder:capitalize"
              />
            </div>

            {/* Rating */}
            <div className="flex-1 flex flex-col gap-[10px]">
              <label className="font-['Outfit',sans-serif] font-semibold text-[#1d1d1d] text-[20px] max-md:text-[16.5px] tracking-[-0.4px]">
                Rate Your Experience
              </label>
              <div className="relative w-full h-[80px] max-md:h-[50px] bg-[rgba(208,131,61,0.05)] border border-[rgba(208,131,61,0.25)] rounded-[20px] max-md:rounded-[15px] px-[24px] max-md:px-[18px] flex items-center">
                <span className="font-['Outfit',sans-serif] text-[#1d1d1d]/40 text-[22px] max-md:text-[15px]">4 Stars</span>
                <div className="flex gap-1 ml-auto mr-[32px]">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={stars} alt="Star" className="w-[24px] h-[24px] max-md:w-[17px] max-md:h-[17px]" />
                  ))}
                </div>
                {/* Dropdown chevron */}
                <svg className="absolute right-[24px] max-md:right-[18px] w-[16px] h-[16px] text-[#1d1d1d]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

          </div>

          {/* Bottom Row: Textarea + Submit Button */}
          <div className="flex flex-col md:flex-row gap-[20px] items-end w-full">

            <div className="flex-1 w-full flex flex-col gap-[10px]">
              <label className="font-['Outfit',sans-serif] font-semibold text-[#1d1d1d] text-[20px] max-md:text-[16.5px] tracking-[-0.4px]">
                What did you like most? Share your thoughts with us
              </label>
              <textarea
                placeholder="Did It Boost Your Day? Would You Recommend It?"
                className="w-full h-[80px] max-md:h-[50px] py-[26px] max-md:py-[15px] bg-[rgba(208,131,61,0.05)] border border-[rgba(208,131,61,0.25)] rounded-[20px] max-md:rounded-[15px] px-[24px] max-md:px-[18px] font-['Outfit',sans-serif] text-[22px] max-md:text-[15px] text-[#1d1d1d] focus:outline-none focus:border-[#d0833d] transition-colors placeholder:text-[#1d1d1d]/40 placeholder:capitalize resize-none"
              />
            </div>

            <button
              type="button"
              className="md:w-auto w-full bg-[#d0833d] hover:bg-[#d0833d]/90 text-white font-['Outfit',sans-serif] font-semibold text-[22px] max-md:text-[15.1px] px-[28px] max-md:px-[19px] py-[14px] max-md:py-[9.6px] rounded-[18px] max-md:rounded-[12.3px] transition-all h-[80px] max-md:h-[50px] flex items-center justify-center shrink-0"
            >
              Submit Now
            </button>

          </div>
        </form>
      </div>
    </section>
  );
};

export default ReviewForm;
