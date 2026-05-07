import React from 'react';

const offerings = [
  {
    id: 1,
    tag: "Starter Pack - 6 Shots",
    title: "Perfect To Get Started",
    price: "Rs 2,350/-",
    image: "/src/assets/starter-pack.png", // Placeholder
    isCustom: false,
  },
  {
    id: 2,
    tag: "Pro Pack - 12 Shots",
    title: "Better Value. Longer Supply",
    price: "Rs 4,450/-",
    image: "/src/assets/pro-pack.png", // Placeholder
    isCustom: false,
    featured: true,
  },
  {
    id: 3,
    tag: "Build Your Pack - Custom Orders",
    title: "Want More Or Planning For A Group?",
    price: "",
    image: "/src/assets/custom-pack.png", // Placeholder
    isCustom: true,
  }
];

const Offerings: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="text-center mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Our Offerings
          </span>
          <h2 className="text-5xl font-bold mt-4 mb-2 text-black">Choose What Fits Your Routine</h2>
          <p className="text-neutral-500 text-lg font-medium">Everything You Need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item) => (
            <div 
              key={item.id} 
              className={`flex flex-col rounded-3xl overflow-hidden transition-all hover:shadow-2xl ${item.featured ? 'scale-105 z-10 shadow-xl' : 'shadow-lg border border-neutral-100'}`}
            >
              {/* Image Area */}
              <div className={`h-80 relative flex items-center justify-center p-6 ${item.featured ? 'bg-[#F2EAE2]' : 'bg-[#F9F4F0]'}`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              {/* Info Area */}
              <div className="p-8 bg-[#1A1A1A] text-white flex-grow flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-primary font-bold uppercase tracking-wide mb-4">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    {item.title}
                  </h3>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  {item.isCustom ? (
                    <button className="w-full py-3 border border-primary/50 text-primary hover:bg-primary hover:text-black font-bold rounded-xl transition-all">
                      Drop Us A Message
                    </button>
                  ) : (
                    <>
                      <span className="text-xl font-medium">{item.price}</span>
                      <button className="bg-transparent border border-white/20 hover:border-primary text-white hover:text-primary px-4 py-2 rounded-lg text-sm font-bold flex items-center space-x-1 transition-all">
                        <span>+</span>
                        <span>Add To Cart</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
