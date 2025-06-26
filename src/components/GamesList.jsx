// src/components/GameList.jsx
import React, { useEffect, useState } from 'react';
import { fetchPopularGames } from '../services/api'; // adjust if your path differs

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const gamesPerPage = 8;
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);
  const totalPages = Math.ceil(games.length / gamesPerPage);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await fetchPopularGames();
        setGames(data);
      } catch (err) {
        console.error('Failed to fetch games:', err);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <div className="px-6 py-12">
      {loading ? (
        <p className="text-white text-center">Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentGames.map((game) => (
              <div
                key={game.id}
                className="backdrop-blur-lg bg-white/10 border border-white/20 text-white p-4 rounded-2xl shadow-lg max-w-full transition-transform hover:scale-105 duration-300"
              >
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="rounded mb-3"
                />
                <h2 className="text-xl font-bold">{game.name}</h2>
                <p className="text-sm text-yellow-400 font-semibold">
                  ⭐ {game.rating}
                </p>
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

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-2 mt-10">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-40"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`px-3 py-1 text-sm rounded ${
                  currentPage === index + 1
                    ? 'bg-cyan-500'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-40" >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GameList;
