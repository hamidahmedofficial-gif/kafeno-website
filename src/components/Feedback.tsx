import React from 'react';

const Feedback: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="max-w-6xl mx-auto bg-[#F9F4F0] rounded-[50px] p-16 border border-neutral-100">
          <div className="text-center mb-12">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Drop Some Love
            </span>
            <h2 className="text-6xl font-bold mt-6 mb-4 text-black">Loved Your Kafeno Moment?</h2>
            <p className="text-neutral-500 text-xl">
              Tell us how it felt. Your feedback helps us make every sip better.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-2">
              <label className="text-black font-bold text-lg px-2">Name (Optional)</label>
              <input 
                type="text" 
                placeholder="Your name" 
                className="bg-white border border-neutral-200 rounded-2xl p-6 text-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-black font-bold text-lg px-2">Email (Optional)</label>
              <input 
                type="email" 
                placeholder="Stay connected with us" 
                className="bg-white border border-neutral-200 rounded-2xl p-6 text-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-black font-bold text-lg px-2">Rate Your Experience</label>
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex items-center justify-between">
                <span className="text-neutral-400 font-medium">4 Stars</span>
                <div className="flex text-primary">
                   {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill={i < 4 ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-3 flex flex-col space-y-2">
              <label className="text-black font-bold text-lg px-2">What did you like most? Share your thoughts with us</label>
              <textarea 
                rows={4}
                placeholder="Did it boost your day? Would you recommend it?" 
                className="bg-white border border-neutral-200 rounded-3xl p-8 text-lg focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 lg:col-span-3 flex justify-end">
              <button 
                type="submit" 
                className="bg-black hover:bg-neutral-800 text-white font-bold px-12 py-5 rounded-2xl text-xl transition-all shadow-lg hover:shadow-xl"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
