import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-gray-100 p-10 rounded-lg shadow-md">
      <div className="grid grid-cols-4 gap-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold">32,000+</h3>
          <p className="text-gray-500">Tutors</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">300,000+</h3>
          <p className="text-gray-500">Reviews</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">120+</h3>
          <p className="text-gray-500">Languages</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">180+</h3>
          <p className="text-gray-500">Users</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;