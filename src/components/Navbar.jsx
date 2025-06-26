import React, { useState } from 'react';

const Navbar = () => {

 const [isMenuOpen, setIsMenuOpen] = useState(true);
 
  return (
    
    <header>
        <div className="container">

        {/* Mobile Navigation */}
       <nav>
     <div className='flex flex-row justify-between items-center'>
       <img src="/images/logo.png" alt="logo" className='h-28 w-auto' />




    <div>
      <ul className='hidden md:flex gap-4 text-primary'>
        <li className='hover:underline transition duration-500 ease-in-out cursor-pointer'>
          Home
        </li>
        <li className='hover:underline transition duration-500 ease-in-out cursor-pointer'>
          About
        </li>
        <li className='hover:underline transition duration-500 ease-in-out cursor-pointer'>
          Games
        </li>
        <li className='hover:underline transition duration-500 ease-in-out cursor-pointer'>
          Developers
        </li>
        <li className='hover:underline transition duration-500 ease-in-out cursor-pointer'>
          Streamers
        </li>
      </ul>
    </div>




     <div 
     onClick={() => setIsMenuOpen(!isMenuOpen)}
     className="md:hidden space-y-2">
      <span className="block h-0.5 w-8 bg-primary"></span>
      <span className="block h-0.5 w-8 bg-primary"></span>
      <span className="block h-0.5 w-5 bg-primary"></span>
    </div>
    </div>

    

   
 
      </nav>
        </div>


          <div className={`fixed top-0 w-full bg-bg h-screen z-100 ${isMenuOpen ?  "translate-x-[10000px]" : "translate-x-0"} transform transition-transform duration-500 ease-in-out `}>
           <div className=' p-10'>
            <p className='text-5xl text-primary'>Hello, </p> <br />
            <p className='text-2xl text-primary w-[500px]'>Welcome to Gamecore </p> <br />
            <p className='text-5xl text-primary underline'> Games </p> <br />
            <p className='text-5xl text-primary underline'> Developers </p> <br />
            <p className='text-5xl text-primary underline'> Streamers </p> <br />
               
     
           </div>   
       
     </div>






          {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

    </header>
      
      
  );
}

export default Navbar;
