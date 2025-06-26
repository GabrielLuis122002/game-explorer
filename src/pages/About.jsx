import React from 'react';

const About = () => {
  return (
    <section className='h-[80vh]'>
      <div> 
   
<div className="relative w-full h-full flex flex-col md:flex-row overflow-hidden  bg-[#0d0d11] gap-">
  {/* LEFT SIDE (1 part) */}
  <div
    className="flex-[1] z-10 text-white p-10 md:p-16"
    style={{
      clipPath: 'polygon(0 0, 80% 0, 80% 100%, 0% 100%)',
      backgroundColor: '#0d0d11',
    }}
  >

    <div className='space-y-10'>
        <div>
<h2 className="text-3xl font-bold text-primary mb-4">About GameCore</h2>
    <p className="text-primary text-sm/7 max-w-[500px]">
      GameCore is your all-in-one platform for discovering and tracking video games across all genres, consoles, and generations. Built for gamers, by gamers — we bring you real-time insights into the gaming universe.
    </p>
    </div>
    

         <div>
            <h2 className="text-3xl font-semibold text-white mb-1">🚀 Our Mission</h2>
            <p className="text-sm/7 text-gray-300  max-w-[400px]">
              We aim to bridge the gap between casual gamers and hardcore fans by making game discovery fast, fun, and beautiful. Whether you're exploring retro classics or upcoming AAA titles, GameCore is your companion in every journey.
            </p>
          </div>
    </div>

  
  </div>

  {/* RIGHT SIDE (2 parts) */}
  <div
    className=" flex-[2] z-0"
    style={{
      clipPath: 'polygon(20% 0, 200% 0, 100% 500%, 0% 100%)',
    }}
  >
    <video
      src="/videos/bg-video-2.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  </div>
</div>





 
    
      </div>
    </section>
  );
}

export default About;
