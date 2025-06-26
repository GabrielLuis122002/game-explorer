import React from 'react';
import Button from '../components/Button';
import GamesList from '../components/GamesList';


const Home = () => {
  return (
    <section className=' h-[80vh]'>
        <div className="container">
        <div className=' space-y-5 text-center'>   
          <h1 className="text-primary  animate-bounce-cool" >Dominate the Gameverse</h1>
          <p className="text-primary "> Dive into the world of top-rated titles, upcoming releases, and exclusive insights curated for gamers. </p>
           
           <Button title="Explore"/>
          
          </div>
        
      
  
        </div>

     
                     
    </section>



  );
}

export default Home;
