import axios from "axios";
import React, { useEffect, useState, useTransition } from "react";

const MyBooked = () => {
  const [bookedData, setBookedData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_localhost}/booked-tutorial`)
      .then((data) => setBookedData(data.data));
  }, []);
  const updateReview = (id) => {
    axios
      .patch(`${import.meta.env.VITE_localhost}/reviewUpdate/${id}`)
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    <div>
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Booked Tutors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
          {bookedData.map((tutor) => (
            <div
              key={tutor._id}
              className="bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {tutor.name}
                </h3>
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">Language:</span>{" "}
                  {tutor.language}
                </p>
                <p className="text-gray-700 mt-1">
                  <span className="font-semibold">Price:</span> ${tutor.price}
                </p>
                <button
                  onClick={() => updateReview(tutor.id)}
                  className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
                >
                  Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBooked;
