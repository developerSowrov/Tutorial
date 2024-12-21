import React from "react";

const TutorCard = () => {
  return (
    <div>
      <div className=" my-16 p-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md border">
            <div className="flex items-center space-x-4">
              <img src="path-to-logo.png" alt="English" className="w-10 h-10" />
              <div>
                <h2 className="text-lg font-semibold">English tutors</h2>
                <p className="text-gray-500 text-sm">20,000 teachers</p>
              </div>
            </div>
            <div>
              <span className="text-gray-400 text-xl">&gt;</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md border">
            <div className="flex items-center space-x-4">
              <img src="path-to-logo.png" alt="Spanish" className="w-10 h-10" />
              <div>
                <h2 className="text-lg font-semibold">Spanish tutors</h2>
                <p className="text-gray-500 text-sm">6,820 teachers</p>
              </div>
            </div>
            <div>
              <span className="text-gray-400 text-xl">&gt;</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md border">
            <div className="flex items-center space-x-4">
              <img src="path-to-logo.png" alt="French" className="w-10 h-10" />
              <div>
                <h2 className="text-lg font-semibold">French tutors</h2>
                <p className="text-gray-500 text-sm">2,505 teachers</p>
              </div>
            </div>
            <div>
              <span className="text-gray-400 text-xl">&gt;</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md border">
            <div className="flex items-center space-x-4">
              <img src="path-to-logo.png" alt="German" className="w-10 h-10" />
              <div>
                <h2 className="text-lg font-semibold">German tutors</h2>
                <p className="text-gray-500 text-sm">2,398 teachers</p>
              </div>
            </div>
            <div>
              <span className="text-gray-400 text-xl">&gt;</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md border">
            <div className="flex items-center space-x-4">
              <img src="path-to-logo.png" alt="Italian" className="w-10 h-10" />
              <div>
                <h2 className="text-lg font-semibold">Italian tutors</h2>
                <p className="text-gray-500 text-sm">1,124 teachers</p>
              </div>
            </div>
            <div>
              <span className="text-gray-400 text-xl">&gt;</span>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md border">
            <div className="flex items-center space-x-4">
              <img src="path-to-logo.png" alt="Chinese" className="w-10 h-10" />
              <div>
                <h2 className="text-lg font-semibold">Chinese tutors</h2>
                <p className="text-gray-500 text-sm">2,324 teachers</p>
              </div>
            </div>
            <div>
              <span className="text-gray-400 text-xl">&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
