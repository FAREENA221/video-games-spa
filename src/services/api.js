export const fetchGames = async () => {
  const response = await fetch(
    "https://admin.edulatte.in/api/games?pagination[pageSize]=100"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  const data = await response.json();
  return data.data;
};
