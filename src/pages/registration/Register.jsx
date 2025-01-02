import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/firebase/Authprovider";

const Register = () => {
  const { creatUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    creatUser(email, password)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex items-center justify-center mt-20 bg-base-200 p-4">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
        <h1 className="text-3xl font-bold text-center text-yellow-500 mb-6">
          Register for Talkzy
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              className="w-full input input-bordered"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="username@site.com"
              className="w-full input input-bordered"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a strong password"
              className="w-full input input-bordered"
              required
            />
          </div>

          {/* Photo URL Field */}
          <div className="mb-6">
            <label
              htmlFor="photo"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="url"
              id="photo"
              name="photoURL"
              placeholder="https://your-photo-url.com"
              className="w-full input input-bordered"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full btn bg-yellow-500 text-white font-semibold hover:bg-yellow-600 mb-4"
          >
            Register
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-yellow-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
