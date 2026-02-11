function GameCard({ game }) {
  const releaseYear = new Date(
    parseInt(game.firstReleaseDate)
  ).getFullYear();

  return (
    <div className="bg-[#0e192b] p-6 rounded-md flex justify-between items-center">

      <div>
        <h2 className="text-white font-heading text-lg">
          {game.name}
        </h2>

        <p className="text-sm mt-1">
          Release Date: {releaseYear}
        </p>

        <p className="text-sm mt-2 max-w-xl">
          {game.summary.slice(0, 150)}...
        </p>
      </div>

      <div className="bg-blue-400 w-10 h-10 p-2 flex items-center justify-center rounded-full text-white font-bold">
        {Math.round(game.rating)}
      </div>
    </div>
  );
}

export default GameCard;
