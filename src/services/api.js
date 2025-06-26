const API_KEY = "1665f4f10fae4e43914dd09be8d7d1ff";
const BASE_URL  = "https://api.rawg.io/api"



export const fetchPopularGames = async () => {
    try {
        const response = await fetch(`${BASE_URL}/games?key=${API_KEY}`);
        if(!response.ok) throw new Error('Failed to fetch games');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching games:', error);
        throw error;
    }
};


export const fetchGameById = async (id) => {
  const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
  if (!response.ok) throw new Error('Failed to fetch game details');
  return await response.json();
};
