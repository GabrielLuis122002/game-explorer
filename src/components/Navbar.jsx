import React from 'react';

const Navbar = () => {
  return (
    <header>
        <div className="container">
        {/* Mobile Navigation */}
       <nav className='flex flex-row justify-between items-center'>
    
    <img src="/images/logo.png" alt="logo" className='h-28 w-auto' />
      

     <div class="space-y-2">
      <span class="block h-0.5 w-8 bg-primary"></span>
      <span class="block h-0.5 w-8 bg-primary"></span>
      <span class="block h-0.5 w-5 bg-primary"></span>
    </div>
      </nav>
        </div>
    </header>
      
      
  );
}

export default Navbar;
