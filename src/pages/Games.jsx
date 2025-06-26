import React from 'react';
import GamesList from '../components/GamesList';

const Games = () => {
  return (
    <section className=' py-10 bg-gradient-to-br from-bg via-card to-[#24243e]'>
      <div className='container'>
        <div>
            <h2 className='text-primary'>Games</h2>
            <GamesList/>
        </div>
      </div>
    </section>
  );
}

export default Games;
