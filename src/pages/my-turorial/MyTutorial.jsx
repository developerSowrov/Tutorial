import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const MyTutorial = () => {
  const { email } = useParams();
  const [myTutorials, setMyTutorials] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_localhost}/my-tutorial/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyTutorials(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Your Tutorials
        </h2>

        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-gray-700 font-medium">
                Name
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-medium">
                Image
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-medium">
                Language
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-medium">
                Price
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-medium">
                Description
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-medium">
                Review
              </th>
              <th className="px-6 py-3 text-left text-gray-700 font-medium">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {myTutorials?.map((myTutorial) => (
              <tr className="border-b">
                <td className="px-6 py-3 text-gray-800">{myTutorial.name}</td>
                <td className="px-6 py-3">
                  <img
                    src="image_url_here"
                    alt="Tutorial"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="px-6 py-3 text-gray-800">
                  {myTutorial.language}
                </td>
                <td className="px-6 py-3 text-gray-800">{myTutorial.price}</td>
                <td className="px-6 py-3 text-gray-800">
                  {myTutorial.description.slice(0, 15)}...
                </td>
                <td className="px-6 py-3 text-gray-800">{myTutorial.review}</td>
                <td className="px-6 py-3">
                  <Link to={"/update"}>
                    <button className="px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md mr-2">
                      Update
                    </button>
                  </Link>
                  <button className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorial;
