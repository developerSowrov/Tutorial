import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_localhost}/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeacher(data);
      });
  }, []);
  return (
    <div>
      <div className="bg-base-200 min-h-screen py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tutor Image */}
              <div>
                <img
                  src={teacher?.image}
                  alt="Tutor"
                  className="w-full h-auto rounded-md"
                />
              </div>

              {/* Tutor Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {teacher?.name}
                </h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Language:</span>{" "}
                  {teacher?.language}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Price:</span>
                  {teacher?.price}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Review:</span>{" "}
                  {teacher?.review}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Description:</span>{" "}
                  {teacher?.description}
                </p>
                {/* Book Button */}
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md">
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
