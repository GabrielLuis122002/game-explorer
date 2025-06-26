import React, { useEffect, useState } from 'react';
import { fetchGameById, fetchPopularGames } from '../services/api';

const GamesList = () => {
const [games, setGames] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
  const loadGamesWithDevelopers = async () => {
    try {
      const basicGames = await fetchPopularGames();

      // Fetch full details (developer info)
      const detailedGames = await Promise.all(
        basicGames.map(async (game) => {
          const fullGame = await fetchGameById(game.id);
          return {
            ...game,
            developers: fullGame.developers,
          };
        })
      );

      setGames(detailedGames);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  loadGamesWithDevelopers();
}, []);

  return loading ? (
    <p>Loading.....</p>

  ) : (
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
  {games.map((game) => (
    <div
      key={game.id}
      className="backdrop-blur-lg bg-white/10 border border-white/20 text-white p-2 rounded-2xl shadow-lg max-w-[500px] transition-transform hover:scale-105 duration-300"
    >
      <img
        src={game.background_image}
        alt={game.name}
        className="rounded mb-2"
      />
      <h2 className="text-xl font-bold">{game.name}</h2>
      <p className="text-sm text-yellow-400 font-semibold">⭐ {game.rating}</p>
      <p className="text-sm text-gray-300">Released: {game.released}</p>

      <p className="text-sm text-gray-400 mt-1">
        {game.genres.map((genre) => genre.name).join(', ')}
      </p>

      <p className="text-sm text-gray-400 mt-1 italic">
        Developer: {game.developers?.[0]?.name || 'Unknown'}
      </p>
    </div>
  ))}
</div>
  );
}

export default GamesList;
