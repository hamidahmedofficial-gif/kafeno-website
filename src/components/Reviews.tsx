import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Hannah Schmitt",
    role: "Lead Designer",
    text: "“I usually struggle with long work nights, but these coffee shots actually make a difference. No prep, no waiting, just instant focus when I need it most.”",
    avatar: "/src/assets/avatar1.png",
  },
  {
    id: 2,
    name: "Hannah Schmitt", // Using same name as placeholder from metadata
    role: "Lead Designer",
    text: "“I keep a pack in my gym bag and another at work. It’s become my go-to for quick energy without the crash later.”",
    avatar: "/src/assets/avatar2.png",
  },
  {
    id: 3,
    name: "Hannah Schmitt",
    role: "Lead Designer",
    text: "“I switched from regular coffee because it takes too much time. These shots are way more convenient and honestly feel stronger. Perfect for my study sessions.”",
    avatar: "/src/assets/avatar3.png",
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="text-center mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Real People. Real Energy
          </span>
          <h2 className="text-6xl font-bold mt-6 mb-4 text-black">What People Are Saying</h2>
          <p className="text-neutral-500 text-xl max-w-2xl mx-auto">
            From late-night study sessions to long workdays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-[#FAF9F6] p-10 rounded-[40px] border border-neutral-100 flex flex-col justify-between hover:shadow-xl transition-shadow">
              <div className="mb-10">
                <div className="flex text-primary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  ))}
                </div>
                <p className="text-neutral-800 text-lg leading-relaxed font-medium">
                  {review.text}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-neutral-300 rounded-full flex-shrink-0 border-2 border-white shadow-sm overflow-hidden">
                  <div className="w-full h-full bg-neutral-400 flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="text-black font-bold text-lg">{review.name}</h4>
                  <p className="text-neutral-400 text-sm font-medium">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
