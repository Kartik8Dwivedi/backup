import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Template = ({Component}) => {
  return (
    <>
      <div className="w-screen p-5">
        <Navbar />
      </div>
      <div className="w-screen"><Component/></div>
      <div className="w-screen">
        <Footer />
      </div>
    </>
  );
}

export default Template