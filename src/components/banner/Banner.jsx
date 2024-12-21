import React from "react";
import one from "../../assets/82282207_9830406.jpg";
import two from "../../assets/49402906_9197161.jpg";
import three from "../../assets/49402891_9227374.jpg";
const Banner = () => {
  return (
    <div className="my-16 ">
      <div className="carousel rounded-box w-full">
        <div className="carousel-item w-full">
          <img
            src={one}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={two}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={three}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
