import React from "react";
import { SignIn, useAuth } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const SignInPage = () => {
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
    <div className="min-h-[68vh] flex justify-center items-center">
      <div className="flex-col justify-center items-center">
        <SignIn />
        <div>
          <h1 className="text-center mt-10">
            Don't have an account yet?{" "}
            <Link to={"/signup"} className="text-blue-800 underline">
              Sign Up Here Now
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
