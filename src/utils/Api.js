export const fetchGames = async () => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${import.meta.env.VITE_GAME_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
