import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="flexCenter search-bar mt-10 pb-3 pt-3">
      <HiLocationMarker className="text-orange-600" size={25} />
      <input
        placeholder="Search by title/city/country..."
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button class="bg-orange-600 hover:bg-orange-500 hover:text-black text-white  py-1 px-4 rounded-full">
  search
</button>
    </div>
  );
};

export default SearchBar;
