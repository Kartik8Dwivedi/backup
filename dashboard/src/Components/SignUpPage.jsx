import React from "react";
import { SignIn, SignUp, useAuth } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const SignUpPage = () => {
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoaded) {
    return (
      <div className="flex w-screen justify-center items-center h-[67vh]">
        <Spinner />
      </div>
    );
  }
  if (isSignedIn) {
    navigate("/");
  }
  return (
    <div className="flex justify-center items-center">
      <div className="flex-col justify-center items-center">
        <SignUp />
        <div>
          <h1 className="text-center mt-10">
            Already have an account?{" "}
            <Link to={"/signin"} className="text-blue-800 underline">
              Sign In instead
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
