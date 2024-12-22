import React from "react";

const Details = () => {
  return (
    <div>
      <div className="bg-base-200 min-h-screen py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tutor Image */}
              <div>
                <img
                  src="https://via.placeholder.com/400"
                  alt="Tutor"
                  className="w-full h-auto rounded-md"
                />
              </div>

              {/* Tutor Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  John Doe
                </h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Language:</span> English
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Price:</span> $100
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Review:</span> 4.5
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Description:</span> This is a
                  detailed description about the tutor's expertise and teaching
                  style.
                </p>
                {/* Book Button */}
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
