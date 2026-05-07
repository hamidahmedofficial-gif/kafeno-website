import React from 'react';
import avatar from '../assets/avatar.png';
import starIcon from '../assets/stars.svg';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Hannah Schmitt",
      role: "Lead Designer",
      quote: "“I usually struggle with long work nights, but these coffee shots actually make a difference. No prep, no waiting, just instant focus when I need it most.”",
      avatar: avatar,
      height: '358px'
    },
    {
      id: 2,
      name: "Hannah Schmitt",
      role: "Lead Designer",
      quote: "“I switched from regular coffee because it takes too much time. These shots are way more convenient and honestly feel stronger. Perfect for my study sessions.”",
      avatar: avatar,
      height: '390px'
    },
    {
      id: 3,
      name: "Hannah Schmitt",
      role: "Lead Designer",
      quote: "“I keep a pack in my gym bag and another at work. It’s become my go-to for quick energy without the crash later.”",
      avatar: avatar,
      height: '326px'
    }
  ];

  return (
    <section id="testimonials" className="relative w-full py-[120px] bg-white flex flex-col items-center">
      <div className="flex flex-col items-center gap-[14px] mb-[60px] text-center px-6">
        <div className="bg-[rgba(208,131,61,0.1)] px-[10px] py-[6px] rounded-[100px]">
          <p className="font-['Metrophobic',sans-serif] text-[#d0833d] text-[14px] max-md:text-[10px]">
            Real People. Real Energy
          </p>
        </div>
        <h2 className="font-['Samsung_Sharp_Sans',sans-serif] font-bold text-black text-[54px] max-md:text-[31.8px] tracking-[-1.08px] max-md:tracking-[-0.63px]">
          What People Are Saying
        </h2>
        <p className="font-['Metrophobic',sans-serif] text-[#1d1d1d] text-[22px] max-md:text-[12px] leading-[32px]">
          From late-night study sessions to long workdays.
        </p>
      </div>

      <div className="container mx-auto px-[120px] max-md:px-[32px] w-full flex flex-col md:flex-row items-start justify-center gap-[40px] md:gap-[20px] lg:gap-[40px]">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="relative w-full md:w-[388px] max-md:h-auto max-md:min-h-[332px] bg-[rgba(208,131,61,0.1)] border border-[rgba(208,131,61,0.2)] flex flex-col justify-between p-[34px] max-md:p-[31.5px]"
            style={{ 
              borderRadius: '10px 40px 10px 40px', // tl, tr, br, bl in Figma it was tl-10 tr-40 bl-40 br-10
              height: window.innerWidth > 768 ? review.height : 'auto' 
            }}
          >
            <div className="flex flex-col gap-[24px] max-md:gap-[22.2px]">
              {/* 5 Rating Stars */}
              <div className="flex gap-[4px]">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={starIcon} alt="Star" className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px]" />
                ))}
              </div>
              
              <p className="font-['Satoshi',sans-serif] italic text-black opacity-75 text-[20px] max-md:text-[16.5px] leading-[32px] max-md:leading-[29.6px]">
                {review.quote}
              </p>
            </div>

            <div className="flex items-center gap-[14px] mt-[24px]">
              <img src={review.avatar} alt={review.name} className="w-[60px] h-[60px] max-md:w-[55.6px] max-md:h-[55.6px] rounded-full object-cover" />
              <div className="flex flex-col justify-center">
                <p className="font-['Playfair_Display',sans-serif] font-semibold text-[#1d1d1d] text-[24px] max-md:text-[22.2px]">
                  {review.name}
                </p>
                <p className="font-['Metrophobic',sans-serif] text-[#1d1d1d] text-[16px] max-md:text-[14.8px]">
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
