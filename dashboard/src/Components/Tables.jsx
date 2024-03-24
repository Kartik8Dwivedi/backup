import React from 'react'
import TableOne from './Table/TableOne';
import TableThree from './Table/TableThree';
import TableTwo from './Table/TableTwo';
import { useAuth } from '@clerk/clerk-react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const Tables = () => {
      const { getToken, isLoaded, isSignedIn } = useAuth();

      if (!isLoaded) {
        return (
          <div className="flex w-screen justify-center items-center h-[67vh]">
            <Spinner />
          </div>
        );
      }

      if (!isSignedIn) {
        // if not signed in, then route to signin page:
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
    <div className='flex justify-center items-center w-screen'>
      <div className="flex flex-col gap-10 w-[80vw] p-3">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </div>
  );
}

export default Tables