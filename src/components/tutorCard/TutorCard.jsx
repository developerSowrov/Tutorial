import React from "react";
import { Link } from "react-router-dom";

const TutorCard = () => {
  return (
    <div>
      <div className=" my-16 p-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link to={"/find-tutors/english"}>
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md border">
              <div className="flex items-center space-x-4">
                <img
                  src="path-to-logo.png"
                  alt="English"
                  className="w-10 h-10"
                />
                <div>
                  <h2 className="text-lg font-semibold">English tutors</h2>
                  <p className="text-gray-500 text-sm">20,000 teachers</p>
                </div>
              </div>
              <div>
                <span className="text-gray-400 text-xl">&gt;</span>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to={"/find-tutors/spanish"}>
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md border">
              <div className="flex items-center space-x-4">
                <img
                  src="path-to-logo.png"
                  alt="Spanish"
                  className="w-10 h-10"
                />
                <div>
                  <h2 className="text-lg font-semibold">Spanish tutors</h2>
                  <p className="text-gray-500 text-sm">6,820 teachers</p>
                </div>
              </div>
              <div>
                <span className="text-gray-400 text-xl">&gt;</span>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to={"/find-tutors/french"}>
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md border">
              <div className="flex items-center space-x-4">
                <img
                  src="path-to-logo.png"
                  alt="French"
                  className="w-10 h-10"
                />
                <div>
                  <h2 className="text-lg font-semibold">French tutors</h2>
                  <p className="text-gray-500 text-sm">2,505 teachers</p>
                </div>
              </div>
              <div>
                <span className="text-gray-400 text-xl">&gt;</span>
              </div>
            </div>
          </Link>

          {/* Card 4 */}
          <Link to={"/find-tutors/german"}>
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md border">
              <div className="flex items-center space-x-4">
                <img
                  src="path-to-logo.png"
                  alt="German"
                  className="w-10 h-10"
                />
                <div>
                  <h2 className="text-lg font-semibold">German tutors</h2>
                  <p className="text-gray-500 text-sm">2,398 teachers</p>
                </div>
              </div>
              <div>
                <span className="text-gray-400 text-xl">&gt;</span>
              </div>
            </div>
          </Link>

          {/* Card 5 */}
          <Link to={"/find-tutors/italian"}>
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md border">
              <div className="flex items-center space-x-4">
                <img
                  src="path-to-logo.png"
                  alt="Italian"
                  className="w-10 h-10"
                />
                <div>
                  <h2 className="text-lg font-semibold">Italian tutors</h2>
                  <p className="text-gray-500 text-sm">1,124 teachers</p>
                </div>
              </div>
              <div>
                <span className="text-gray-400 text-xl">&gt;</span>
              </div>
            </div>
          </Link>

          {/* Card 6 */}
          <Link to={"/find-tutors/chiness"}>
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md border">
              <div className="flex items-center space-x-4">
                <img
                  src="path-to-logo.png"
                  alt="Chinese"
                  className="w-10 h-10"
                />
                <div>
                  <h2 className="text-lg font-semibold">Chinese tutors</h2>
                  <p className="text-gray-500 text-sm">2,324 teachers</p>
                </div>
              </div>
              <div>
                <span className="text-gray-400 text-xl">&gt;</span>
              </div>
            </div>
          </Link>

          <Link to={"/find-tutors/korean"}>
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md border">
              <div className="flex items-center space-x-4">
                <img
                  src="path-to-logo.png"
                  alt="Chinese"
                  className="w-10 h-10"
                />
                <div>
                  <h2 className="text-lg font-semibold">Korean tutors</h2>
                  <p className="text-gray-500 text-sm">2,324 teachers</p>
                </div>
              </div>
              <div>
                <span className="text-gray-400 text-xl">&gt;</span>
              </div>
            </div>
          </Link>

          <Link to={"/find-tutors/russian"}>
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md border">
              <div className="flex items-center space-x-4">
                <img
                  src="path-to-logo.png"
                  alt="Chinese"
                  className="w-10 h-10"
                />
                <div>
                  <h2 className="text-lg font-semibold">Russian tutors</h2>
                  <p className="text-gray-500 text-sm">2,324 teachers</p>
                </div>
              </div>
              <div>
                <span className="text-gray-400 text-xl">&gt;</span>
              </div>
            </div>
          </Link>

          <Link to={"/find-tutors/affrican"}>
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md border">
              <div className="flex items-center space-x-4">
                <img
                  src="path-to-logo.png"
                  alt="Chinese"
                  className="w-10 h-10"
                />
                <div>
                  <h2 className="text-lg font-semibold">Affrican tutors</h2>
                  <p className="text-gray-500 text-sm">2,324 teachers</p>
                </div>
              </div>
              <div>
                <span className="text-gray-400 text-xl">&gt;</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
