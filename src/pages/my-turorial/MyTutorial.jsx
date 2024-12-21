import React from "react";
import { Link } from "react-router-dom";

const MyTutorial = () => {
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
            {/* Example row: Repeat this for each tutorial */}
            <tr className="border-b">
              <td className="px-6 py-3 text-gray-800">Tutorial Name</td>
              <td className="px-6 py-3">
                <img
                  src="image_url_here"
                  alt="Tutorial"
                  className="w-16 h-16 object-cover rounded-md"
                />
              </td>
              <td className="px-6 py-3 text-gray-800">English</td>
              <td className="px-6 py-3 text-gray-800">$100</td>
              <td className="px-6 py-3 text-gray-800">
                Brief description of the tutorial.
              </td>
              <td className="px-6 py-3 text-gray-800">4.5</td>
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

            {/* Add more rows for additional tutorials here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTutorial;
