import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FindTutors = () => {
  const [tutorials, setTutorials] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [sortOption, setSortOption] = useState(""); // State for sorting option

  useEffect(() => {
    fetch(`${import.meta.env.VITE_localhost}/allTutors`)
      .then((res) => res.json())
      .then((data) => {
        setTutorials(data);
        setFilteredTutors(data); // Initially show all tutors
      });
  }, []);

  // Search functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = tutorials.filter((tutor) =>
      tutor.language.toLowerCase().includes(query)
    );
    setFilteredTutors(filtered);
  };

  // Sorting function
  const handleSort = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sortedTutors = [...filteredTutors];

    if (option === "price-low") {
      sortedTutors.sort((a, b) => a.price - b.price); // Low to High
    } else if (option === "price-high") {
      sortedTutors.sort((a, b) => b.price - a.price); // High to Low
    } else if (option === "review-best") {
      sortedTutors.sort((a, b) => b.review - a.review); // Best to Worst
    } else if (option === "review-worst") {
      sortedTutors.sort((a, b) => a.review - b.review); // Worst to Best
    }

    setFilteredTutors(sortedTutors);
  };

  return (
    <div className="bg-base-200 mt-20 py-8 rounded-xl">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Find Tutors
        </h2>

        {/* Search and Sort Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Search by language"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full md:w-1/2 lg:w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <select
            value={sortOption}
            onChange={handleSort}
            className="w-full md:w-1/3 lg:w-1/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="review-best">Review: Best to Worst</option>
            <option value="review-worst">Review: Worst to Best</option>
          </select>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutors.length > 0 ? (
            filteredTutors.map((tutorial) => (
              <div
                key={tutorial._id}
                className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={tutorial.image}
                  alt="Tutor"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {tutorial.name}
                  </h3>
                  <p className="text-gray-600">Language: {tutorial.language}</p>
                  <p className="text-gray-600">Review: {tutorial.review}</p>
                  <p className="text-gray-600">Price: {tutorial.price} BDT</p>
                  <Link to={`/tutor/${tutorial._id}`}>
                    <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No tutors found for the selected language.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindTutors;
