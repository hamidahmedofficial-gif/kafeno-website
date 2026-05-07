import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              See It in Action
            </span>
            <h2 className="text-6xl font-bold mt-6 mb-6 text-black leading-tight">Energy That Moves With You</h2>
            <p className="text-neutral-500 text-xl font-medium mb-10 max-w-lg">
              Watch how people use coffee shots in real life. stop adjusting your day around coffee. 
              Let coffee adjust to you.
            </p>
            
            <div className="flex space-x-4">
               <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"></path></svg>
               </div>
               <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"></path></svg>
               </div>
            </div>
          </div>

          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all rounded-[40px] z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
              </div>
            </div>
            <div className="w-full aspect-video bg-neutral-200 rounded-[40px] overflow-hidden">
               <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                 <span className="text-neutral-600 font-bold">Video Thumbnail</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
