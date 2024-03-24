import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const Data = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);
  const [linkInput, setLinkInput] = useState("");

  const handleInputChange = (event) => {
    setLinkInput(event.target.value);
  };

  const handleClick = () => {
    // Check if link input is not empty
    if (!linkInput.trim()) {
      alert("Please enter a link before scraping.");
      return;
    }

    // Show spinner and initiate data scraping
    setShowSpinner(true);
    setTimeout(() => {
      // After 2 seconds, hide spinner and navigate to home
      setShowSpinner(false);
      navigate("/link");
    }, 2000);
  };

  if (!isLoaded) {
    return (
      <div className="flex w-screen justify-center items-center h-[67vh]">
        <Spinner />
      </div>
    );
  }

  if (!isSignedIn) {
    // If not signed in, redirect to sign-in page
    return (
      <div className="w-[100vw] h-[67vh] flex flex-col gap-10 justify-center items-center">
        <h1 className="text-center text-2xl font-medium">
          Please authenticate yourself for accessing this page
        </h1>
        <Link
          to="/signin"
          className="text-center text-4xl font-semibold underline text-blue-800"
        >
          Sign in to view this page
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center flex-col my-[28vh]">
      <div className="w-[40vw]">
        <input
          type="text"
          placeholder="Enter Link"
          value={linkInput}
          onChange={handleInputChange}
          className="input input-bordered input-success w-full mt-5"
        />
        <div className="flex justify-between items-center p-2">
          <h1 className="text-3xl">Enter Link to be scraped</h1>
          <button className="btn btn-primary text-white" onClick={handleClick}>
            Scrape Data
          </button>
        </div>
      </div>
      {showSpinner && <Spinner />}
    </div>
  );
};

export default Data;
