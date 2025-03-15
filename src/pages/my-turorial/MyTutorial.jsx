import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MyTutorial = () => {
  const { email } = useParams();
  const [myTutorials, setMyTutorials] = useState([]);

  // Delete function
  const remove = (id) => {
    axios
      .delete(`${import.meta.env.VITE_localhost}/delete/${id}`)
      .then(() => {
        const remaining = myTutorials.filter((single) => single._id !== id);
        setMyTutorials(remaining);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_localhost}/my-tutorial/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTutorials(data);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Your Tutorials
      </h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse hidden md:table">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-gray-700 font-medium">
                Name
              </th>
              <th className="px-4 py-3 text-left text-gray-700 font-medium">
                Image
              </th>
              <th className="px-4 py-3 text-left text-gray-700 font-medium">
                Language
              </th>
              <th className="px-4 py-3 text-left text-gray-700 font-medium">
                Price
              </th>
              <th className="px-4 py-3 text-left text-gray-700 font-medium">
                Description
              </th>
              <th className="px-4 py-3 text-left text-gray-700 font-medium">
                Review
              </th>
              <th className="px-4 py-3 text-left text-gray-700 font-medium">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {myTutorials.map((myTutorial) => (
              <tr key={myTutorial._id} className="border-b">
                <td className="px-4 py-3 text-gray-800">{myTutorial.name}</td>
                <td className="px-4 py-3">
                  <img
                    src={myTutorial.image}
                    alt="Tutorial"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="px-4 py-3 text-gray-800">
                  {myTutorial.language}
                </td>
                <td className="px-4 py-3 text-gray-800">{myTutorial.price}</td>
                <td className="px-4 py-3 text-gray-800">
                  {myTutorial.description.slice(0, 15)}...
                </td>
                <td className="px-4 py-3 text-gray-800">{myTutorial.review}</td>
                <td className="px-4 py-3 md:flex-col lg:block lg:mt-3 md:flex">
                  <Link to={`/update/${myTutorial._id}`}>
                    <button className="px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-600 mb-2 rounded-md lg:mr-2">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => remove(myTutorial._id)}
                    className="px-4  py-2 text-white bg-red-500 hover:bg-red-600 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View - Card Layout */}
      <div className="md:hidden flex flex-col gap-4">
        {myTutorials.map((myTutorial) => (
          <div
            key={myTutorial._id}
            className="bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <img
              src={myTutorial.image}
              alt="Tutorial"
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{myTutorial.name}</h3>
            <p className="text-gray-600">Language: {myTutorial.language}</p>
            <p className="text-gray-600">Price: {myTutorial.price} BDT</p>
            <p className="text-gray-600">
              Description: {myTutorial.description.slice(0, 30)}...
            </p>
            <p className="text-gray-600">Review: {myTutorial.review}</p>

            {/* Buttons for Mobile */}
            <div className="flex justify-between mt-4">
              <Link to={`/update/${myTutorial._id}`}>
                <button className="px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md">
                  Update
                </button>
              </Link>
              <button
                onClick={() => remove(myTutorial._id)}
                className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTutorial;
