import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [tutorial, setTutorial] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_localhost}/update/${id}`)
      .then((data) => setTutorial(data.data));
  }, []);
  const updated = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const language = form.language.value;
    const price = form.price.value;
    const description = form.description.value;
    const review = form.review.value;

    // Consolidate all form data into an object
    const formData = {
      name,
      email,
      image,
      language,
      price,
      description,
      review,
    };
    axios
      .patch(`${import.meta.env.VITE_localhost}/updated/${id}`, formData)
      .then((data) => {
        console.log(data);
        navigate(`/my-tutorial/${email}`);
      })
      .catch((err) => console.log(err));
  };
  const { name, email, image, description, language, price, review, _id } =
    tutorial;

  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6 mt-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Update Tutorials
        </h2>
        <form onSubmit={updated}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              defaultValue={name}
              disabled
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue={email}
              disabled
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Image Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="image"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              defaultValue={image}
              name="image"
              placeholder="Enter image URL"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Language Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="language"
            >
              Language
            </label>
            <select
              id="language"
              name="language"
              defaultValue={language}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>

          {/* Price Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              defaultValue={price}
              name="price"
              placeholder="Enter price (e.g., 100)"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={description}
              placeholder="Enter a brief description"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              rows="4"
            ></textarea>
          </div>

          {/* Review Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="review"
            >
              Review
            </label>
            <input
              type="number"
              id="review"
              defaultValue={review}
              name="review"
              readOnly
              className="w-full px-4 py-2 border bg-gray-100 rounded-md focus:outline-none cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full  px-6 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
