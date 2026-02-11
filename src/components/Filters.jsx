import { useState } from "react";

function Filters({ onFilter, onClear }) {
  const [name, setName] = useState("");
  const [minScore, setMinScore] = useState("");
  const [orderBy, setOrderBy] = useState("releaseDate");

  const handleApply = () => {
    onFilter(name, minScore, orderBy);
  };

  const handleClear = () => {
    setName("");
    setMinScore("");
    setOrderBy("releaseDate");
    onClear();
  };

  return (
    <div className="bg-cardDark w-full md:w-64 flex flex-col gap-4">
<div className="p-6 rounded-md border-1 border-white flex gap-3 flex-col">
      <h3 className="text-white font-heading font-semibold text-lg">
        Filter Results
      </h3>

      <div>
        <label className="text-sm">Game Name</label>
        <input
          type="text"
          placeholder="search for a game..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-inputDark text-white p-2 rounded mt-1"
        />
      </div>

      <div>
        <label className="text-sm">Minimum Score</label>
        <input
          type="number"
          placeholder="1 - 10"
          value={minScore}
          onChange={(e) => setMinScore(e.target.value)}
          className="w-full bg-inputDark text-white p-2 rounded mt-1"
        />
      </div>

      <div>
        <label className="text-sm">Order By</label>
        <select
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value)}
          className="w-full bg-inputDark text-white p-2 rounded mt-1"
        >
          <option value="releaseDate" className="text-black">Release Date</option>
          <option value="score" className="text-black">Score</option>
          <option value="name" className="text-black">Name</option>
        </select>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handleApply}
          className="bg-accentBlue px-4 py-2 rounded text-white"
        >
          Apply
        </button>

        <button
          onClick={handleClear}
          className="bg-gray-600 px-4 py-2 rounded text-white"
        >
          Clear
        </button>
      </div>
      </div>
    </div>
  );
}

export default Filters;
