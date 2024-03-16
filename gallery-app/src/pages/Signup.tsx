import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation
  const [email, setEmail] = useState<string>(""); // State for email input
  const [password, setPassword] = useState<string>(""); // State for password input
  const [error, setError] = useState<string>(""); // State for error messages

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Attempt to create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      // If successful, navigate to home page
      navigate("/");
    } catch (error) {
      // If error occurs, set error message
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}{" "}
      {/* Display error message if error state is not empty */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Gallery App</h1>
            <p className="py-6">
              " Please sign up or log in to access your gallery. "
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  // {/* Changed input type to password for security */}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline btn-primary">Signup</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
