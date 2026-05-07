import React from 'react';
import starterImg from '../assets/product-starter.jpg';
import proImg from '../assets/product-pro.jpg';
import customImg from '../assets/product-custom.jpg';

const Products: React.FC = () => {
  return (
    <section id="products" className="w-full py-20 bg-white">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 mb-16 px-6">
        <span className="bg-[rgba(208,131,61,0.1)] text-[#d0833d] text-[14px] 
                         font-['Metrophobic'] px-4 py-2 rounded-full">
          Our Offerings
        </span>
        <h2 className="font-['Samsung_Sharp_Sans',sans-serif] font-bold text-[54px] max-md:text-[31.8px]
                       text-black capitalize tracking-[-1.08px] text-center">
          Choose what fits your routine
        </h2>
        <p className="font-['Metrophobic'] text-[22px] text-[#1d1d1d]">
          Everything You Need
        </p>
      </div>

      {/* Cards Row — items-end so the taller Pro Pack card rises above */}
      <div className="flex flex-col md:flex-row items-end justify-center gap-5 px-6 md:px-[100px] w-full">

        {/* Card 1 - Starter Pack (387×528 image + 133px info) */}
        <div
          className="group flex flex-col overflow-hidden cursor-pointer w-full md:w-[387px] shrink-0"
        >
          {/* Image area */}
          <div
            className="overflow-hidden w-full relative"
            style={{
              backgroundColor: 'rgba(208, 131, 61, 0.1)',
              height: '528px'
            }}
          >
            <img
              src={starterImg}
              alt="Starter Pack"
              className="absolute inset-0 w-full h-full object-cover object-center 
                         transition-transform duration-500 ease-in-out 
                         group-hover:scale-105"
            />
          </div>

          {/* Info bar */}
          <div
            className="flex flex-col justify-center gap-1 p-5 flex-1"
            style={{ backgroundColor: '#1d1d1d', minHeight: '133px' }}
          >
            {/* Pack badge */}
            <span
              className="w-fit text-[12px] font-['Metrophobic'] px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(208,131,61,0.1)',
                color: '#d0833d'
              }}
            >
              Starter Pack - 6 Shots
            </span>

            {/* Title + Button row */}
            <div className="flex items-center justify-between gap-4 mt-1">
              <div className="flex flex-col gap-1">
                <p className="text-white font-['Outfit'] font-bold text-[24px] capitalize leading-tight">
                  Perfect To Get Started
                </p>
                <p className="text-white font-['Metrophobic'] text-[18px]">
                  Rs 2,350/-
                </p>
              </div>
              <button
                className="shrink-0 text-white text-[14px] font-['Outfit'] font-semibold 
                           px-3 py-2 rounded-[12px] whitespace-nowrap
                           transition-colors duration-300 hover:bg-[#d0833d]"
                style={{ border: '1px solid rgba(208,131,61,0.25)' }}
              >
                + Add To Cart
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 - Pro Pack — FEATURED: larger (427×582 image + 146px info) */}
        <div
          className="group flex flex-col overflow-hidden cursor-pointer w-full md:w-[427px] shrink-0"
        >
          {/* Image area */}
          <div
            className="overflow-hidden w-full relative"
            style={{
              backgroundColor: 'rgba(208, 131, 61, 0.1)',
              height: '582px'
            }}
          >
            <img
              src={proImg}
              alt="Pro Pack"
              className="absolute inset-0 w-full h-full object-cover object-center 
                         transition-transform duration-500 ease-in-out 
                         group-hover:scale-105"
            />
          </div>

          {/* Info bar */}
          <div
            className="flex flex-col justify-center gap-1 p-5 flex-1"
            style={{ backgroundColor: '#1d1d1d', minHeight: '146px' }}
          >
            {/* Pack badge */}
            <span
              className="w-fit text-[14px] font-['Metrophobic'] px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(208,131,61,0.1)',
                color: '#d0833d'
              }}
            >
              Pro Pack - 12 Shots
            </span>

            {/* Title + Button row */}
            <div className="flex items-center justify-between gap-4 mt-1">
              <div className="flex flex-col gap-1">
                <p className="text-white font-['Outfit'] font-bold text-[26px] capitalize leading-tight">
                  Better Value. Longer Supply
                </p>
                <p className="text-white font-['Metrophobic'] text-[20px]">
                  Rs 4,450/-
                </p>
              </div>
              <button
                className="shrink-0 text-white text-[16px] font-['Outfit'] font-semibold 
                           px-[14px] py-[6px] rounded-[13.24px] whitespace-nowrap
                           transition-colors duration-300 hover:bg-[#d0833d]"
                style={{ border: '1.1px solid rgba(208,131,61,0.25)' }}
              >
                + Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 - Custom Pack (386×528 image + 134px info) */}
        <div
          className="group flex flex-col overflow-hidden cursor-pointer w-full md:w-[386px] shrink-0"
        >
          {/* Image area */}
          <div
            className="overflow-hidden w-full relative"
            style={{
              backgroundColor: 'rgba(208, 131, 61, 0.1)',
              height: '528px'
            }}
          >
            <img
              src={customImg}
              alt="Custom Pack"
              className="absolute inset-0 w-full h-full object-cover object-center 
                         transition-transform duration-500 ease-in-out 
                         group-hover:scale-105"
            />
          </div>

          {/* Info bar */}
          <div
            className="flex flex-col justify-center gap-1 p-5 flex-1"
            style={{ backgroundColor: '#1d1d1d', minHeight: '134px' }}
          >
            {/* Pack badge */}
            <span
              className="w-fit text-[12px] font-['Metrophobic'] px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'rgba(208,131,61,0.1)',
                color: '#d0833d'
              }}
            >
              Build Your Pack - Custom Orders
            </span>

            {/* Title + Button row */}
            <div className="flex items-center justify-between gap-4 mt-1">
              <div className="flex flex-col gap-1">
                <p className="text-white font-['Outfit'] font-bold text-[24px] capitalize leading-tight">
                  Want More Or Planning For A Group?
                </p>
              </div>
              <button
                className="shrink-0 text-white text-[14px] font-['Outfit'] font-semibold 
                           px-3 py-2 rounded-[12px] whitespace-nowrap
                           transition-colors duration-300 hover:bg-[#d0833d]"
                style={{ border: '1px solid rgba(208,131,61,0.25)' }}
              >
                Drop Us A Message
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
