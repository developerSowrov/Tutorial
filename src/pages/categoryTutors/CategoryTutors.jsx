import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CategoryTutors = () => {
  const { category } = useParams();
  const [tutorials, setTutorials] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_localhost}/find-tutors/${category}`)
      .then((res) => res.json())
      .then((data) => {;
        setTutorials(data);
      });
  }, []);
  return (
    <div>
      <div className="bg-base-200 mt-20 py-8 rounded-xl">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Find Tutors
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Tutor Card */}
            {tutorials?.map((tutorial) => (
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTutors;
