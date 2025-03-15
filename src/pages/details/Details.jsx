import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../components/firebase/Authprovider";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [teacher, setTeacher] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_localhost}/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTeacher(data);
      });
  }, []);
  const sendData = {
    id: teacher?._id,
    image: teacher?.image,
    language: teacher?.language,
    price: teacher?.price,
    tutorEmail: teacher?.email,
    name:teacher?.name,
    email: user.email,
  };
  // console.log(data);
  const dataSend = () => {
    axios
      .post(`${import.meta.env.VITE_localhost}/booked`, sendData)
      .then((data) => {;
        navigate("/my-booked");
      })
      .catch((err) =>{
        // console.log(err)
      });
  };
  return (
    <div>
      <div className="bg-base-200 min-h-screen py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tutor Image */}
              <div>
                <img
                  src={teacher?.image}
                  alt="Tutor"
                  className="w-full h-auto rounded-md"
                />
              </div>

              {/* Tutor Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {teacher?.name}
                </h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Language:</span>{" "}
                  {teacher?.language}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Price:</span>
                  {teacher?.price}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Review:</span>{" "}
                  {teacher?.review}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Description:</span>{" "}
                  {teacher?.description}
                </p>
                {/* Book Button */}
                <button
                  onClick={dataSend}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
