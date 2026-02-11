import { useEffect, useState } from "react";
import { fetchGames } from "../services/api";
import Filters from "../components/Filters";
import GameCard from "../components/GameCard";
import Loader from "../components/Loader";

function Home() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    try {
      const data = await fetchGames();
      setGames(data);
      setFilteredGames(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = (name, minScore, orderBy) => {
    let filtered = [...games];

    if (name) {
      filtered = filtered.filter((game) =>
        game.attributes.name
          .toLowerCase()
          .includes(name.toLowerCase())
      );
    }

    if (minScore) {
      filtered = filtered.filter(
        (game) =>
          Number(game.attributes.rating) >= Number(minScore)
      );
    }

    if (orderBy === "score") {
      filtered.sort(
        (a, b) =>
          Number(b.attributes.rating) -
          Number(a.attributes.rating)
      );
    }

    if (orderBy === "name") {
      filtered.sort((a, b) =>
        a.attributes.name.localeCompare(
          b.attributes.name
        )
      );
    }

    if (orderBy === "releaseDate") {
      filtered.sort(
        (a, b) =>
          Number(b.attributes.firstReleaseDate) -
          Number(a.attributes.firstReleaseDate)
      );
    }

    setFilteredGames(filtered);
  };

  const handleClear = () => {
    setFilteredGames(games);
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row gap-10">

      <Filters onFilter={handleFilter} onClear={handleClear} />

      <div className="flex-1 flex flex-col gap-6">
        {filteredGames.length === 0 ? (
          <p>No games found.</p>
        ) : (
          filteredGames.map((game) => (
            <GameCard key={game.id} game={game.attributes} />
          ))
        )}
      </div>

    </div>
  );
}

export default Home;
