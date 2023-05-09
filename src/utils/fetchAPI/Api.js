export const fetchGames = async () => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${import.meta.env.VITE_GAME_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const fetchSearchGames = async (query) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?search=${query}&key=${
      import.meta.env.VITE_GAME_KEY
    }`
  );
  const data = await response.json();
  console.log(data);
  return data.results;
};
