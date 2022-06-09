import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Register = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  // eslint-disable-next-line
  const { user, signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      history("/");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/fe7046a2-cca7-45d7-b041-ab4a43ac971e/NL-nl-20220530-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="fixed bg-black/80 top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Register to Netflix</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4 gap-3"
              >
                <input
                  className="p-3 bg-gray-700 rounded "
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 bg-gray-700 rounded "
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <p>
                    <input className="mr-2" type="checkbox" /> Remember Me!
                  </p>
                  <p>Need Help!</p>
                </div>
                <p className="py-4">
                  <span>Already subscribed to Netflix?</span>
                  {"  "}
                  <Link to="/login" className="text-white">
                    Sign In
                  </Link>
                </p>
              </form>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
