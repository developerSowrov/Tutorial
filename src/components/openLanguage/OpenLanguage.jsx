import React from "react";
import pic from "../../assets/14230944_5437683.jpg";
const OpenLanguage = () => {
  return (
    <div>
      <div className="bg-gray-100 px-6 py-12 md:px-16">
        <div className="flex flex-col lg:flex-row  items-center lg:items-start max-w-7xl mx-auto">
          {/* Left Image Section */}
          <div className="w-full md:pb-10 lg:pb-0 lg:w-1/2">
            <img
              src={pic}
              alt="Team working together"
              className="rounded-lg w-full shadow-lg"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full lg:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              OPENING LANGUAGES TO EVERYONE
            </h1>
            <p className="text-gray-600 leading-relaxed">
              We have been offering human translation services for the last 20
              years to our 201,684 clients, in 187 languages and 40 areas of
              expertise. Our experts use a powerful combination of human
              creativity and machine intelligence to craft consistent quality
              translations at speed. At Talkzy, we also pride ourselves in being
              considered one of the best companies to work with by translators.
              We pay them rapidly and fairly, wherever they are in the world.
              Our team aims to seed and nurture solutions for today and design
              the ones for tomorrow. New workflows, new languages, new tools to
              build a service that helps shorten distances and make our planet a
              little smaller.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenLanguage;
